import { Request, Response } from "express";

import userService from "../services/user";

const newUser = async ({ body }: Request, res: Response) => {
  try {
    const user = await userService.newUser(body);

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "User founded",
      });
    } else {
      res.status(201).json({
        ok: true,
        msg: "New user successful",
        id: user,
      });
    }
  } catch (error) {
    console.log("error new user >>>> ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();

    res.status(201).json({
      ok: true,
      msg: "Get Users",
      users: users,
    });
  } catch (error) {
    console.log("error get users ", error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export default {
  newUser,
  getUsers,
};
