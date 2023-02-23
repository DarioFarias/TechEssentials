import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.send("Obtener todos los usuarios");
});

userRoutes.post("/", (req, res) => {
  res.send("Crear usuario");
});

userRoutes.get("/:id", (req, res) => {
  res.send("Buscar usuario por su id");
});

userRoutes.put("/:id", (req, res) => {
  res.send("Actualizar usuario por su id");
});

userRoutes.delete("/:id", (req, res) => {
  res.send("Borrar usuario por su id");
});

export default userRoutes;
