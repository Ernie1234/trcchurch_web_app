import LivePrograms from "@/models/LiveProgramModel";
import connect from "@/utils/db";

const handler = async (req, response) => {
  try {
    await connect();
    // const live = await LivePrograms.find();
    // return response.status(200).json({ success: true, data: live });

    const live = await LivePrograms.findOne({}, null, {
      sort: { createdAt: -1 },
    });
    // console.log(live);
    return response.status(200).json(live);
  } catch (error) {
    console.log("Error in getting all live program", error);
    // return response
    //   .status(400)
    //   .json({ success: false, msg: "Server Error while fetching Programs" });
    // return response.status(405).send("Method not allowed.");
    return response.status(500).json({ message: error.message });
  }
};

export default handler;
