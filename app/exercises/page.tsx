import Link from "next/link";
import EditExerciseForm from "@/app/(components)/editExerciseForm";
import { getExercises } from "@/app/lib/data";
import { Exercise } from "@/app/lib/definitions";
import Button from "../(components)/Button";

type Params = {
  id: string;
};

export default async function Exercises() {
  const data = await getExercises();

  return (
    <>
      <div className="flex flex-col w-full">
        {data.exercises.map((excercise: Exercise) => (
          <div key={excercise._id} className="p-6 border-b">
            <Link href={`/exercises/${excercise._id}/`}>{excercise.name}</Link>
          </div>
        ))}
      </div>

      <Button href="/exercises/new">Add New</Button>
    </>
  );
}
