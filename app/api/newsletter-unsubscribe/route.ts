import { type NextRequest, NextResponse } from "next/server";
import { getGoogleSheetsClient } from "../../../lib/google-sheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.website && body.website.trim() !== "") {
      console.log(`Unsubscribe honeypot triggered at ${new Date().toISOString()}`);
      return NextResponse.json(
        { error: "Invalid submission", message: "Please try again" },
        { status: 400 },
      );
    }

    const { email } = body;
    if (!email) {
      return NextResponse.json(
        { error: "Email required", message: "Please provide an email address to unsubscribe" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sanitizedEmail = String(email).trim().toLowerCase();
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Invalid email format", message: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    const sheets = getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:F",
    });
    const rows = existingData.data.values || [];

    let targetRowIndex = -1;
    let targetRow: any[] | null = null;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (row[2] && row[2].toLowerCase() === sanitizedEmail) {
        targetRowIndex = i + 1;
        targetRow = row;
        break;
      }
    }

    if (targetRowIndex === -1) {
      return NextResponse.json(
        { error: "Email not found", message: "This email address is not subscribed to our newsletter" },
        { status: 404 },
      );
    }

    const currentSubscriptionStatus = targetRow![3];
    if (
      currentSubscriptionStatus === false ||
      currentSubscriptionStatus === "FALSE" ||
      currentSubscriptionStatus === "false"
    ) {
      return NextResponse.json(
        { error: "Already unsubscribed", message: "This email address is already unsubscribed" },
        { status: 409 },
      );
    }

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!D${targetRowIndex}`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [["FALSE"]] },
    });

    console.log(`Newsletter unsubscribe: ${sanitizedEmail}`);

    return NextResponse.json({
      success: true,
      message: "Successfully unsubscribed from newsletter",
    });
  } catch (error: any) {
    console.error("Error processing unsubscribe:", error);
    return NextResponse.json(
      { error: "Failed to process unsubscribe", details: error.message },
      { status: 500 },
    );
  }
}
