


import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Ensure this is a server-side import

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse request body safely

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Save message in the database
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
    // Ensure error is properly handled
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
