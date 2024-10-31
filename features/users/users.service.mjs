import { userRepository } from "./users.repository.mjs";

export const userService = {
  async addUser(user) {
    const newUser = {
      chat_id: user.chatId,
      first_name: user.first_name,
      username: user.username,
      favorites: [],
    };
    const userId = await userRepository.addUser(newUser);

    return userId;
  },
  async findUser(chat_id) {
    const isUserExist = await userRepository.findUser(chat_id);
    return isUserExist;
  },
  async setFavoriteStation(station_id) {},
};
