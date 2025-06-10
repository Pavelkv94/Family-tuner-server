import express from "express";
import cors from "cors";
import { stationsRouter } from "./features/stations/stations.router.mjs";
import { usersRouter } from "./features/users/users.router.mjs";

export const initApp = () => {
  const app = express();


  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.status(200).json({ version: "1.1" });
  });

  app.use("/stations", stationsRouter);
  app.use("/users", usersRouter);

  
  return app;
};
