import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const newMessage = await prisma.message.create({
      data: {
        name: body.name,
        email: body.email,
        message: body.message,
      },
    });

    return NextResponse.json(
      { success: true, message: "Message sent!", data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /contact:", error); // Logging the error once

    let errorMessage = "An unexpected error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
