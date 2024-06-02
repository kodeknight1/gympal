import Workout from "@/app/models/Workout";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundWorkout = await Workout.findOne({ _id: id });

  return NextResponse.json({ foundWorkout }, { status: 200 });
}
