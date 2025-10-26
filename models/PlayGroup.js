import mongoose from "mongoose";

const playGroupSchema = new mongoose.Schema(
  {
    groupId: { type: String, required: true },
    educatorId: { type: String },
    studentsArray: [
      {
        studentId: {
          type: String,
          required: true,
        },
        remainingUsage: {
          type: Number,
          default: 0,
          min: 0,
        },
      },
    ],
    dayOfWeek: { type: String },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    status: { type: Number },
  },
  { timestamps: true }
);

const PlayGroup = mongoose.model("PlayGroup", playGroupSchema);

export default PlayGroup;
