import Plan from "@/app/models/Plan";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundPlan = await Plan.findOne({ _id: id });
  return NextResponse.json({ foundPlan }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const planData = body.formData;

    const updatePlanData = await Plan.findByIdAndUpdate(id, {
      ...planData,
    });

    return NextResponse.json({ message: "Plan updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Plan.findByIdAndDelete(id);
    return NextResponse.json({ message: "Plan Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
