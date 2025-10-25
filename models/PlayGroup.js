import mongoose from "mongoose";

const playGroupSchema = new mongoose.Schema(
  {
    groupId: { type: String, required: true },
    educatorId: { type: String },
    studentsArray: [{ type: String }],
    dayOfWeek: { type: String },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    status: { type: Number },
  },
  { timestamps: true }
);

const PlayGroup = mongoose.model("PlayGroup", playGroupSchema);

export default PlayGroup;
