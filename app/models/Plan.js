import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const planSchema = new Schema(
  {
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const Plan = mongoose.models.Plan || mongoose.model("Plan", planSchema);

export default Plan;
