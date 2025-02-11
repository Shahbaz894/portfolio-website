import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();

    // Validate required fields
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Create new message in the database
    const newMessage = await prisma.message.create({
      data: { name, email, message },
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!", data: newMessage },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error saving message:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again later.";
    
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}