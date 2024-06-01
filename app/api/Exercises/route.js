import Exercise from "@/app/models/Exercise";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const exercises = await Exercise.find();

    return NextResponse.json({ exercises }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const exerciseData = body.formData;
    console.log(exerciseData);
    // await Exercise.create(exerciseData);
    const newExercise = new Exercise(exerciseData);
    await newExercise.save();

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
