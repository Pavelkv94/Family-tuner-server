import { Router } from "express";
import { usersController } from "./users.controller.mjs";

export const usersRouter = Router();

usersRouter.post("/favorites", usersController.setFavoriteStation);
