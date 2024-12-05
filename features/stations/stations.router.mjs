import { Router } from "express";
import { stationsController } from "./stations.controller.mjs";

export const stationsRouter = Router();

stationsRouter.get("/", stationsController.getStations);
stationsRouter.post("/", stationsController.addStation);
