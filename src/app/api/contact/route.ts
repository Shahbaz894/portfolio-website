import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import prisma only in server-side code

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Ensure Prisma is only used on the server
    const newMessage = await prisma.message.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true, message: "Message sent!", data: newMessage });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
