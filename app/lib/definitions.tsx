export type Plan = {
  _id: string;
  name: string;
};

export type Exercise = {
  _id: string;
  name: string;
};

export type Workout = {
  _id: string;
  name: string;
  description: string;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    weight: number;
  }[];
};
