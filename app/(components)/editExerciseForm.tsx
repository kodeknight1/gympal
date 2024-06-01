"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Exercise } from "@/app/lib/definitions";

const EditExerciseForm = ({ exercise }: { exercise: Exercise }) => {
  const EDITMODE = exercise._id === "new" ? false : true;
  const router = useRouter();
  const startingExerciseData = { name: "" };

  if (EDITMODE) {
    startingExerciseData["name"] = exercise.name;
  }

  const [formData, setFormData] = useState(startingExerciseData);

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Exercises/${exercise._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update Exercise");
      }
    } else {
      const res = await fetch("/api/Exercises", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      console.log(res);
      if (!res.ok) {
        throw new Error("Failed to create Exercise");
      }
    }

    setFormData({ name: "" });
    router.push("/exercises");
    router.refresh();
  };

  return (
    <div className=" flex justify-center w-full ">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 max-w-lg w-full "
      >
        <h3>{EDITMODE ? "Update Your Exercise" : "Create New Exercise"}</h3>
        <input
          id="name"
          name="name"
          type="text"
          className="p-3 border"
          onChange={handleChange}
          placeholder="Exercise name"
          required={true}
          value={formData.name}
        />

        <input
          type="submit"
          className="btn max-w-xs"
          value={EDITMODE ? "Update Exercise" : "Create Exercise"}
        />
      </form>
    </div>
  );
};

export default EditExerciseForm;
