import Link from "next/link";
import EditExerciseForm from "@/app/(components)/editExerciseForm";
import { getExerciseById, getExercises } from "@/app/lib/data";
import { Exercise } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

export default async function Exercises({ params }: { params: Params }) {
  let data = await getExerciseById(params.id);

  if (!data || !data.foundExercise) notFound();

  let exercise = data.foundExercise;

  return (
    <>
      <h2>{exercise.name}</h2>
    </>
  );
}
