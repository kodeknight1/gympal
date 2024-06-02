import Link from "next/link";
import EditExerciseForm from "@/app/(components)/editExerciseForm";
import { getExerciseById, getExercises } from "@/app/lib/data";
import { Exercise } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

export default async function Exercises({ params }: { params: Params }) {
  const EDITMODE = params.id === "new" ? false : true;

  let exerciseData: Exercise = {
    _id: "new",
    name: "",
  };

  if (EDITMODE) {
    const data = await getExerciseById(params.id);

    if (!data || !data.foundExercise) return notFound();

    exerciseData = data.foundExercise;
  }

  return (
    <>
      <EditExerciseForm exercise={exerciseData} />
    </>
  );
}
