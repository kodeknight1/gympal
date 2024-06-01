import Exercise from "@/app/models/Exercise";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundExercise = await Exercise.findOne({ _id: id });
  return NextResponse.json({ foundExercise }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const exerciseData = body.formData;

    const updateExerciseData = await Exercise.findByIdAndUpdate(id, {
      ...exerciseData,
    });

    return NextResponse.json({ message: "Exercise updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Exercise.findByIdAndDelete(id);
    return NextResponse.json({ message: "Exercise Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
