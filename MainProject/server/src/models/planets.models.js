import { parse } from "csv-parse";
import path from "path";
import fs from "fs";
import {fileURLToPath} from 'url';
import { rejects } from "assert";

/* making __dirname working in Module Es6 with */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const habitablePlanets = [];
 
const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

export const loadPlanetsData = () => {
    return new Promise((reslove, reject) => {
        fs.createReadStream(path.join(__dirname, '../data', 'kepler_data.csv'))
        .pipe(
          parse({
            comment: "#",
            columns: true
          })
        )
        .on("data", (data) => {
          isHabitablePlanet(data) ? habitablePlanets.push(data) : null;
        })
        .on("error", (err) => {
          console.log(err);
          reject()
        })
        .on("end", () => {
          reslove(habitablePlanets)
        });
    })
} 
