import express from "express";
import UserController from "../controllers/UserController.js";
import authMe from "../midleware/authMe.js";
import isAdmin from "../midleware/isAdmin.js";

const userRoutes = express.Router();

userRoutes.post("/login", UserController.logIn);

userRoutes.post("/", UserController.createUser);

userRoutes.use(authMe)

userRoutes.get("/me", UserController.me)

userRoutes.get("/:id", UserController.getUserById);

userRoutes.put("/:id", UserController.updateUserById);

userRoutes.delete("/:id", UserController.deleteUserById);

userRoutes.post("/logout", UserController.logOut)

userRoutes.use(isAdmin)

userRoutes.get("/", UserController.getAllUsers);

export default userRoutes;
