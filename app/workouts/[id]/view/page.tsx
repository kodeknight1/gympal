import { getWorkoutById } from "@/app/lib/data";
import { Workout } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

export default async function Workouts({ params }: { params: Params }) {
  let data = await getWorkoutById(params.id);

  if (!data || !data.foundWorkout) notFound();

  let workout: Workout = data.foundWorkout;
  console.log(workout);

  return (
    <>
      <h2>{workout.name}</h2>
    </>
  );
}
