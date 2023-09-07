import posts from "@/models/posts";
import { connectToDb } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectToDb();

  try {
    const results = await posts.find();

    // if (!results) return NextResponse({ message: "data not found" });

    return new NextResponse(JSON.stringify(results));
  } catch (error) {
    console.log(error);
    return new NextResponse({
      status: 500,
      message: "server Error",
    });
  }
};
