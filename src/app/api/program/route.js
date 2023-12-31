import { NextResponse } from "next/server";

import Program from "@/models/Program";
import connect from "@/utils/db";

export const GET = async (request) => {
  try {
    await connect();
    const programs = await Program.find();
    return new NextResponse(JSON.stringify(programs), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
