import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    profession: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    bio: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    hourlyRate: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;
