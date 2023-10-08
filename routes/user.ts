import { Router } from "express";
import userController from "../controllers/user";
import { check } from "express-validator";
import validateFields from "../middlewares/validateFields";

const router = Router();

router.post(
  "/newUser",
  [ 
    check("id", "El campo id es Obligatorio").not().isEmpty(),
    check("bio", "El campo bio es Obligatorio").not().isEmpty(),
    check("login", "El campo login es Obligatorio").not().isEmpty(),
    check("name", "El campo name es Obligatorio").not().isEmpty(),
    validateFields,
  ],
  userController.newUser
);

router.get("/getUsers", userController.getUsers);

export default router;
