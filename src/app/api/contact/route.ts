import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // ... (rest of your code)
  } catch (caughtError: any) { // Access the error as caughtError
    console.error("Error in POST /contact:", caughtError); // Log it

    let errorMessage = "An unexpected error occurred.";
    if (caughtError instanceof Error) {
      errorMessage = caughtError.message;
    } else if (typeof caughtError === 'string') {
      errorMessage = caughtError;
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}