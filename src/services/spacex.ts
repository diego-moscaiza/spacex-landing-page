import { type Doc, type APISpaceXResponse } from "../types/api-variables";

interface Props {
  id: string;
}

export const getLaunchById = async ({ id }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await res.json()) as Doc;
  return launch;
}

export const getLatestLaunches = async () => {
  try {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {},
        options: {
          sort: {
            date_unix: "asc",
          },
          limit: 187,
        },
      }),
    });

    const jsonData = await res.json();
    const { docs: launches } = jsonData as APISpaceXResponse;

    // Ordena el límite de lanzamientos que mostrarse
    const latestLaunches = launches.slice(-74);

    // Ordena los lanzamientos de forma descendente
    latestLaunches.sort((a, b) => b.flight_number - a.flight_number);

    return latestLaunches;
  } catch (error) {
    throw new Error("Error al obtener los lanzamientos");
  }
};

export const getOlderLaunches = async () => {
  try {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {},
        options: {
          sort: {
            date_unix: "asc",
          },
          limit: 86,
        },
      }),
    });

    const jsonData = await res.json();
    const { docs: launches } = jsonData as APISpaceXResponse;

    return launches;
  } catch (error) {
    throw new Error("Error al obtener los lanzamientos");
  }
}

