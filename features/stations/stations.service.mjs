import { stationsRepository } from "./stations.repository.mjs";

export const stationsService = {
  async getStations() {
    const result = await stationsRepository.getAll();

    return result;
  },
  async getStation(id) {
    const result = await stationsRepository.getOne(id);

    return result;
  },
  async createStation(payload) {
    const newStation = {
      title: payload.title,
      location: payload.location,
      genre: payload.genre,
      img: payload.img || "",
      url: payload.url,
    };

    const stationId = await stationsRepository.create(newStation);

    return stationId;
  },
};
