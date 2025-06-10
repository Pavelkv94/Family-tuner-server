import { userRepository } from "./users.repository.mjs";

export const userService = {
  async addUser(user) {
    const newUser = {
      chat_id: user.chatId.toString(),
      first_name: user.first_name,
      username: user.username,
      favorites: [],
    };
    const userId = await userRepository.addUser(newUser);

    return userId;
  },
  async findUser(chat_id) {
    const isUserExist = await userRepository.findUser({ chat_id });
    return isUserExist;
  },
  async addFavoriteStation(user_id, station_id) {
    const isAdded = await userRepository.addFavorite(user_id, station_id);
    return isAdded;
  },
  async removeFavoriteStation(user_id, station_id) {
    const isRemoved = await userRepository.removeFavorite(user_id, station_id);
    return isRemoved;
  },
  async getFavoriteStations(user_id) {
    const favorites = await userRepository.getFavorites(user_id);
    return favorites;
  },
};
