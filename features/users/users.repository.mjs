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
      return true;
    } else {
      return false;
    }
  },
};
