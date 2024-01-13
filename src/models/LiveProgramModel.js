import mongoose from "mongoose";

const { Schema } = mongoose;

const LiveSchema = new Schema(
  {
    title: { type: String, required: true },
    preacher: { type: String },
    date: {
      type: Date,
      default: Date.now,
    },
    desc: {
      type: String,
    },
    YoutubeLink: {
      type: String,
      require: true,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid YouTube link!`,
      },
    },
    guestMinisters: {
      type: String,
    },
  },
  {
    timestamps: true, // Creates createdAt and updatedAt fields
  }
);

const LivePrograms =
  mongoose.models.LivePrograms || mongoose.model("LivePrograms", LiveSchema);

export default LivePrograms;
