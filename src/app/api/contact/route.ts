import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { log } from "console";

export async function POST(req: NextRequest) {
  
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
 
}
