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

export const getPlanById = async (id) => {
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

export const deletePlan = async (id) => {
  const res = await fetch(`${process.env.APP_URI}/api/Plans/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete plan.");
  } else {
    return true;
  }
};
