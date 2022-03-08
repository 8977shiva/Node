import express from "express";
import cors from "cors";
import path from "path";
import plantsRouter from "./routes/planets/planets.router.js";
import launchRouters from "./routes/launches/launches.router.js";
import { fileURLToPath } from "url";

/* making __dirname working in Module Es6 with */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const app = express();

// middleware's
app.use(
  cors({
    origin: "http://localhost:3000" // whitelisting this origin so that it can access the API's
  })
);
app.use(express.json()); // to accept json based request
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(plantsRouter);
app.use("/launches", launchRouters);
app.get("/*", (req, res) => {
  /*  /* -> is used for routing within react */
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export default app;
