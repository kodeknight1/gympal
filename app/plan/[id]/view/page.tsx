import { getPlanById } from "@/app/lib/data";

export default async function Plan({ params }) {
  console.log(params.id);

  const planData = await getPlanById(params.id);

  const plan = planData.foundPlan;

  console.log({ plan });

  return (
    <>
      <div className="flex flex-col w-full">{plan.name}</div>
    </>
  );
}
