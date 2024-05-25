"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditWorkoutForm = ({ workout }) => {
  const EDITMODE = workout._id === "new" ? false : true;
  const router = useRouter();
  const startingWorkoutData = {
    name: "",
    description: "",
    exercises: [
      {
        exerciseId: "23321",
        sets: 4,
        reps: 8,
        weight: 10,
      },
    ],
  };

  if (EDITMODE) {
    startingWorkoutData["name"] = workout.name;
    startingWorkoutData["description"] = workout.description;
  }

  const [formData, setFormData] = useState(startingWorkoutData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Workouts/${workout._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update Workout");
      }
    } else {
      console.log("Posting owrkout");
      console.log(formData);
      const res = await fetch("/api/Workouts", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Workout");
      }
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className=" flex justify-center w-full ">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>{EDITMODE ? "Update Your Workout" : "Create New Workout"}</h3>
        <label>Title</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.name}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
        />

        <input
          type="submit"
          className="btn max-w-xs"
          value={EDITMODE ? "Update Workout" : "Create Workout"}
        />
      </form>
    </div>
  );
};

export default EditWorkoutForm;
