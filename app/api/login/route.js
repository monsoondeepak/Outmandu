import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });

    // Return user data (without password)
    const { _id, name } = user;
    return NextResponse.json({ user: { _id, name, email } }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
