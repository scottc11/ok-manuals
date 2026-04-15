import { type NextRequest, NextResponse } from "next/server";
import { getGoogleSheetsClient, getCountryFromIP } from "../../../lib/google-sheets";

export async function POST(request: NextRequest) {
  try {
    const clientIP =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const body = await request.json();

    if (body.website && body.website.trim() !== "") {
      console.log(`Honeypot triggered from IP: ${clientIP} at ${new Date().toISOString()}`);
      return NextResponse.json(
        { error: "Invalid submission", message: "Please try again" },
        { status: 400 },
      );
    }

    const { name, email } = body;
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Invalid name length", message: "Name must be between 2 and 100 characters" },
        { status: 400 },
      );
    }
    if (email.length > 254) {
      return NextResponse.json(
        { error: "Email too long", message: "Email address is too long" },
        { status: 400 },
      );
    }

    const sanitizedName = String(name).trim().replace(/[<>"'&]/g, "").replace(/\s+/g, " ");
    const sanitizedEmail = String(email).trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    const country = await getCountryFromIP(clientIP);
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:F",
    });
    const existingRows = existingData.data.values || [];

    const emailAlreadyExists = existingRows.some(
      (row) => row[2] && row[2].toLowerCase() === sanitizedEmail,
    );
    if (emailAlreadyExists) {
      return NextResponse.json(
        { error: "Email already subscribed", message: "This email address is already subscribed." },
        { status: 409 },
      );
    }

    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const maxSubmissionsPerHour = 3;
    const recentSubmissionsFromIP = existingRows.filter((row) => {
      if (!row[0] || !row[4]) return false;
      const submissionTime = new Date(row[0]).getTime();
      const submissionIP = row[4];
      return (
        submissionIP === clientIP &&
        submissionTime > now - oneHour &&
        !isNaN(submissionTime)
      );
    });
    if (recentSubmissionsFromIP.length >= maxSubmissionsPerHour) {
      console.log(`Rate limit exceeded for IP: ${clientIP}. Recent submissions: ${recentSubmissionsFromIP.length}`);
      return NextResponse.json(
        { error: "Too many requests", message: "Please wait before submitting again. Maximum 3 submissions per hour allowed." },
        { status: 429 },
      );
    }

    const timestamp = new Date().toISOString();
    const values = [[timestamp, sanitizedName, sanitizedEmail, true, clientIP, country]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    console.log(`Newsletter signup: ${sanitizedEmail} from IP: ${clientIP} (${country}) at ${timestamp}`);

    return NextResponse.json({
      success: true,
      message: "Successfully added to newsletter",
    });
  } catch (error: any) {
    console.error("Error adding to newsletter:", error);
    return NextResponse.json(
      { error: "Failed to add to newsletter", details: error.message },
      { status: 500 },
    );
  }
}
