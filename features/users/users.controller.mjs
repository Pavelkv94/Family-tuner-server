import { userService } from "./users.service.mjs";

export const usersController = {
  async getFavoriteStations(req, res) {
    const result = await userService.getFavoriteStations(req.params.user_id);

    res.status(200).json(result);
  },
  async addFavoriteStation(req, res) {
    const isAdded = await userService.addFavoriteStation(req.params.user_id, req.body.station_id);

    if (!isAdded) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(201);
  },
  async removeFavoriteStation(req, res) {
    const isRemoved = await userService.removeFavoriteStation(req.params.user_id, req.body.station_id);

    if (!isRemoved) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204);
  },
};
