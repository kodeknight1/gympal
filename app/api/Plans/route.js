import Plan from "@/app/models/Plan";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const plans = await Plan.find();

    return NextResponse.json({ plans }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const planData = body.formData;
    console.log(planData);
    // await Plan.create(planData);
    const newPlan = new Plan(planData);
    await newPlan.save();

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
