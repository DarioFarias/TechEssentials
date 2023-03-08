import express from "express";
import CategoryController from "../controllers/CategoryController.js"
import authMe from "../midleware/authMe.js";
import isAdmin from "../midleware/isAdmin.js";

const categoryRoutes = express.Router();

categoryRoutes.get("/", CategoryController.getAllCategories);

categoryRoutes.get("/:id", CategoryController.getCategoryById);

categoryRoutes.use(authMe)

categoryRoutes.use(isAdmin)

categoryRoutes.post("/", CategoryController.createCategory);

categoryRoutes.put("/:id", CategoryController.updateCategoryById);

categoryRoutes.delete("/:id", CategoryController.deleteCategoryById);

export default categoryRoutes;