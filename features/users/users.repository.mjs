import { ObjectId } from "mongodb";
import { db } from "../../db/db.mjs";

export const userRepository = {
  async addUser(user) {
    const result = await db.getCollections().usersCollection.insertOne(user);
    return result.insertedId.toString();
  },
  async findUser(chat_id) {
    const result = await db.getCollections().usersCollection.findOne({ chat_id });

    if (result) {
      return result;
    } else {
      return null;
    }
  },
  async getFavorites(user_id) {
    const user = await this.findUser(user_id);

    return user.favorites.map((el) => el.radio_id);
  },
  async addFavorite(user_id, station_id) {
    const result = await db.getCollections().usersCollection.updateOne(
      {
        chat_id: user_id,
      },
      {
        $addToSet: { favorites: { radio_id: station_id } },
      }
    );

    return result.modifiedCount !== 0;
  },
  async removeFavorite(user_id, station_id) {
    const result = await db.getCollections().usersCollection.updateOne(
      {
        chat_id: user_id,
      },
      {
        $pull: { favorites: { radio_id: station_id } },
      }
    );

    return result.modifiedCount !== 0;
  },
};
