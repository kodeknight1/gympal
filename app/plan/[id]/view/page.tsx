import BtnDeletePlan from "@/app/(components)/BtnDeletePlan";
import { getPlanById } from "@/app/lib/data";
import { deletePlan } from "@/app/lib/data";

export default async function Plan({ params }) {
  const planData = await getPlanById(params.id);

  const plan = planData.foundPlan;

  return (
    <div className="flex flex-col w-full items-start gap-3">
      <div className="flex flex-col w-full">{plan.name}</div>
      <BtnDeletePlan planId={params.id} />
    </div>
  );
}
