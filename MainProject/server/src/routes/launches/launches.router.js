import { Router } from "express";
import {
  httpAddNewLaunch,
  httpGetAllLaunches,
  httpAbortLaunch
} from "./launches.controller.js";

const launchRouters = Router();

launchRouters.get("/", httpGetAllLaunches);
launchRouters.post("/", httpAddNewLaunch);
launchRouters.post("/:id", httpAbortLaunch);

export default launchRouters;
