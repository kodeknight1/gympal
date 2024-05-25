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
      throw new Error("Failed to fetch plans.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading plans");
  }
};
