import { loadPlanetsData } from "../../models/planets.models.js "

export const getAllPlanets =  async(req, res) => {
    const planets = await loadPlanetsData();
    return res.status(200).json(planets)
}

