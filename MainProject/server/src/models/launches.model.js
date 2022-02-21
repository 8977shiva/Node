const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch);

export const getAllLaunches = () => {
  return Array.from(launches.values());
};

export const addNewLaunch = (launch) => {
  latestFlightNumber++;
  launches.set(latestFlightNumber, {
    ...launch,
    flightNumber: latestFlightNumber,
    success: true,
    upcoming: true,
    customer: ["NASA"]
  });
};

export const abortLaunchById = (launchId) => {
  console.log(launches.has(launchId));
  if (launches.has(launchId)) {
    // launches.delete(launchId);
    const aborted = launches.get(launchId);
    aborted.success = false;
    aborted.upcoming = false;
    return true;
  } else {
    return false;
  }
};
