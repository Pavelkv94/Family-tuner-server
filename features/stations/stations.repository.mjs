import { ObjectId } from "mongodb";
import { db } from "../../db/db.mjs";

export const stationsRepository = {
  async getAll() {
    const result = await db.getCollections().stationsCollection.find({}).toArray();
    return this.mapStationsToOutput(result);
  },
  async getOne(id) {
    const objectId = new ObjectId(id);
    const stationFromDb = await db.getCollections().stationsCollection.findOne({ _id: objectId });

    if (stationFromDb) {
      const station = { ...stationFromDb, id: stationFromDb._id.toString() };
      const { _id, ...rest } = station;
      return rest;
    } else {
      return null;
    }
  },
  async create(payload) {
    const result = await db.getCollections().stationsCollection.insertOne(payload);
    return result.insertedId.toString();
  },
  mapStationsToOutput(stations) {
    return stations.map((station) => ({ ...station, id: station._id.toString() })).map(({ _id, ...rest }) => rest);
  },
};
