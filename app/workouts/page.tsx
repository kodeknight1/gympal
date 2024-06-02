import Link from "next/link";
import { getWorkouts } from "@/app/lib/data";
import { Workout } from "@/app/lib/definitions";
import Button from "@/app/(components)/Button";

type Params = {
  id: string;
};

export default async function Workouts() {
  const workouts = await getWorkouts();

  return (
    <>
      <div className="flex flex-col w-full">
        {workouts.map((workout: Workout) => (
          <div key={workout._id} className="p-6 border-b">
            <Link href={`/workouts/${workout._id}/view`}>{workout.name}</Link>
          </div>
        ))}
      </div>

      <Button href="/exercises/new">Add New</Button>
    </>
  );
}
