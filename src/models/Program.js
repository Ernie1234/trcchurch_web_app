import mongoose from "mongoose";

const { Schema } = mongoose;

const programSchema = new Schema(
  {
    title: { type: String, required: true },
    preacher: { type: String },
    date: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    guestMinisters: {
      type: String,
    },
  },
  {
    timestamps: true, // Creates createdAt and updatedAt fields
  }
);

const Program =
  mongoose.models.Programs || mongoose.model("Programs", programSchema);

export default Program;
// export default mongoose.model("Programs", programSchema);
