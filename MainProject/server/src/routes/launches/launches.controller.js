import {
  getAllLaunches,
  addNewLaunch,
  abortLaunchById
} from "../../models/launches.model.js";

export const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches());
};

export const httpAddNewLaunch = (req, res) => {
  let launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({ error: "Missing required launch property" });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date"
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
};

export const httpAbortLaunch = (req, res) => {
  const id = req.params.id;
  // console.log(typeof Number(id));
  if (abortLaunchById(Number(id))) {
    return res.status(200).json({
      id,
      message: `launch with ${id} is aborted  `
    });
  } else {
    return res.status(404).json({
      error: "launch not found"
    });
  }
};
