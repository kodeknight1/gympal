import Link from "next/link";
import EditPlanForm from "./(components)/editPlanForm";
import EditWorkoutForm from "./(components)/editWorkoutForm";
import { Plan } from "@/app/lib/definitions";

const getPlans = async () => {
  try {
    const res = await fetch(`${process.env.APP_URI}/api/Plans`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch plans.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading plans");
  }
};

export default async function Home({ params }: { params: { id: string } }) {
  const EDITMODE = params.id === "new" ? false : true;

  let workoutData = {
    _id: "new",
  };

  let planData: Plan = {
    _id: "new",
    name: "",
  };

  const data = await getPlans();

  let plans = [];
  if (data) plans = data.plans;

  return (
    <>
      <div className="flex flex-col w-full">
        {plans.map((plan: Plan) => (
          <div key={plan._id} className="p-6 border-b">
            <Link href={`/plan/${plan._id}/view`}>{plan.name}</Link>
          </div>
        ))}
      </div>

      <EditPlanForm plan={planData} />
    </>
  );
}
