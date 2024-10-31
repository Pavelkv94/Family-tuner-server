import { Router } from "express";
import { usersController } from "./users.controller.mjs";

export const usersRouter = Router();

usersRouter.get("/:user_id/favorites", usersController.getFavoriteStations);
usersRouter.post("/:user_id/addFavorites", usersController.addFavoriteStation);
usersRouter.post("/:user_id/removeFavorites", usersController.removeFavoriteStation);
