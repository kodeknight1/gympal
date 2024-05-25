import Workout from "@/app/models/Workout";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const workouts = await Workout.find();

    return NextResponse.json({ workouts }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const workoutData = body.formData;
    console.log(workoutData);
    // await Workout.create(workoutData);
    const newWorkout = new Workout(workoutData);
    await newWorkout.save();

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
