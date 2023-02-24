import express from "express";
import UserController from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/", UserController.getAllUsers);

userRoutes.post("/", UserController.createUser);

userRoutes.get("/:id", UserController.getUserById);

userRoutes.put("/:id", UserController.updateUserById);

userRoutes.delete("/:id", UserController.deleteUserById);

export default userRoutes;
