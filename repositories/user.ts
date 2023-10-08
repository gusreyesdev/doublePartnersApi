import { AppDataSource } from "../database/data-sources";
import { user } from "../interfaces/user";
import { User } from "../entities/user";

const newUser = async (req: user) => {
  const { id, login, name, bio, email } = req;

  const userRepository = AppDataSource.getRepository(User);

  const userLoad = await userRepository.findOneBy({
    id: id,
  });

  if (!userLoad) {
    let user = new User();

    user.id = id;
    user.bio = bio;
    user.email = email;
    user.login = login;
    user.name = name;

    await userRepository.save(user);

    return user.id;
  } else {
    return userLoad;
  }
};

const getUsers = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  return users;
};

export default {
  newUser,
  getUsers,
};
