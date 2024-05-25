import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const exerciseSchema = new Schema(
  {
    exerciseId: { type: String },
    sets: { type: Number },
    reps: { type: Number },
    weight: { type: Number },
  },
  { _id: false }
);

const workoutSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    test: { type: String },
    exercises: { type: [exerciseSchema] },
  }
  //   {
  //     timestamps: true,
  //   }
);

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;
