"use client";
import { deletePlan } from "@/app/lib/data";
import { useRouter } from "next/navigation";

export default function BtnDeletePlan({
  planId,
  redirectTo = "/",
}: {
  planId: string;
  redirectTo?: string;
}) {
  const router = useRouter();

  const deleteThisPlan = async () => {
    let confirmed = confirm("Are you sure?");

    if (confirmed) {
      let deleted = await deletePlan(planId);

      if (deleted) {
        if (redirectTo != "refresh") {
          router.push(redirectTo);
        }
        router.refresh();
      }
    }
  };

  return (
    <button
      onClick={deleteThisPlan}
      className="text-red-700 px-2 py-1 border border-red-700 rounded-lg"
    >
      Delete
    </button>
  );
}
