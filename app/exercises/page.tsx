import Link from "next/link";
import EditExerciseForm from "@/app/(components)/editExerciseForm";
import { getExercises } from "@/app/lib/data";
import { Exercise } from "@/app/lib/definitions";

type Params = {
  id: string;
};

export default async function Exercises({ params }: { params: Params }) {
  const EDITMODE = params.id === "new" ? false : true;

  let exerciseData: Exercise = {
    _id: "new",
    name: "",
  };

  const data = await getExercises();

  return (
    <>
      <div className="flex flex-col w-full">
        {data.exercises.map((excercise: Exercise) => (
          <div key={excercise._id} className="p-6 border-b">
            <Link href={`/excercise/${excercise._id}/view`}>
              {excercise.name}
            </Link>
          </div>
        ))}
      </div>

      <EditExerciseForm exercise={exerciseData} />
    </>
  );
}
