import { Request } from "express";
import { user } from "../interfaces/user";
import userRepository from "../repositories/user";

const newUser = async (req: user) => {
  const newUser = await userRepository.newUser(req);

  return newUser;
};

const getUsers = async () => {
  const getUsers = await userRepository.getUsers();

  return getUsers;
};

export default {
  newUser,
  getUsers,
};
