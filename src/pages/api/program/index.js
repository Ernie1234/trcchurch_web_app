// import { NextResponse } from "next/server";

import Program from "@/models/Program";
import connect from "@/utils/db";

// export const GET = async (request, response) => {
const handler = async (request, response) => {
  try {
    await connect();
    const programs = await Program.find();
    return response.status(200).json(programs);

    // const programs = await Program.find();
    // return response.status(200).json({
    //   time: "10pm",
    //   guestMinisters: "Gideon Odoma, Femi Lazarus",
    //   startDate: "07|10|2023",
    //   description: "prayer for nigeria in destress",
    // });
    // return new NextResponse(JSON.stringify(programs), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ message: error.message });
    // return new NextResponse("Database error", { status: 500 });
  }
};

export default handler;
