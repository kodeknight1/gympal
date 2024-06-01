export const getPlans = async () => {
  try {
    const res = await fetch(`${process.env.APP_URI}/api/Plans`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch plans.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading plans");
  }
};

export const getPlanById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.APP_URI}/api/Plans/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch plan.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading plans");
  }
};

export const deletePlan = async (id: string) => {
  const res = await fetch(`${process.env.APP_URI}/api/Plans/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete plan.");
  } else {
    return true;
  }
};

export const getExercises = async () => {
  try {
    const res = await fetch(`${process.env.APP_URI}/api/Exercises`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch exercises.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading exercises");
  }
};
