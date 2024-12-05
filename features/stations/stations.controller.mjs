import { stationsService } from "./stations.service.mjs";

export const stationsController = {
  async getStations(req, res) {
    const result = await stationsService.getStations();

    res.status(200).json(result);
  },
  async addStation(req, res) {
    const stationId = await stationsService.createStation(req.body);
    const result = await stationsService.getStation(stationId);

    res.status(200).json(result);
  },
};
