import { userService } from "./users.service.mjs";

export const usersController = {
  async setFavoriteStation(req, res) {
    const userId = await userService.setFavoriteStation(req.body.station_id);
  },
};
