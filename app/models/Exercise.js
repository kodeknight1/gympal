import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const exerciseSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Exercise =
  mongoose.models.Movie || mongoose.model("Exercise", exerciseSchema);

export default Exercise;
