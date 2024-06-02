"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Plan } from "@/app/lib/definitions";

const EditPlanForm = ({ plan }: { plan: Plan }) => {
  const EDITMODE = plan._id === "new" ? false : true;
  const router = useRouter();
  const startingPlanData = { name: "" };

  if (EDITMODE) {
    startingPlanData["name"] = plan.name;
  }

  const [formData, setFormData] = useState(startingPlanData);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Plans/${plan._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update Plan");
      }
    } else {
      const res = await fetch("/api/Plans", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Plan");
      }
    }

    setFormData({ name: "" });
    router.push("/");
    router.refresh();
  };

  return (
    <div className=" flex justify-center w-full ">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 max-w-lg w-full "
      >
        <h3>{EDITMODE ? "Update Your Plan" : "Create New Plan"}</h3>
        <input
          id="name"
          name="name"
          type="text"
          className="p-3 border"
          onChange={handleChange}
          placeholder="Plan name"
          required={true}
          value={formData.name}
        />

        <input
          type="submit"
          className="btn max-w-xs"
          value={EDITMODE ? "Update Plan" : "Create Plan"}
        />
      </form>
    </div>
  );
};

export default EditPlanForm;
