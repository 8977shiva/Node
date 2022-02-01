import { Router } from "express";
import { getAllPlanets } from "./planets.controller.js";

const plantsRouter = Router();

plantsRouter.get('/planets', getAllPlanets);


export default plantsRouter;