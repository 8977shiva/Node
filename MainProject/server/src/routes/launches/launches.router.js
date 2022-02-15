import { Router } from "express";
import { httpAddNewLaunch, httpGetAllLaunches } from "./launches.controller.js";

const launchRouters = Router();

launchRouters.get("/", httpGetAllLaunches);
launchRouters.post("/", httpAddNewLaunch);

export default launchRouters;
