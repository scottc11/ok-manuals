import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidation-secret");
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    revalidatePath("/", "layout");

    return NextResponse.json({ revalidated: true, timestamp: Date.now() });
  } catch (error: any) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { revalidated: false, error: error.message },
      { status: 500 },
    );
  }
}
