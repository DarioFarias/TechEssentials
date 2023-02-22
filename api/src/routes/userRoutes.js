import express from "express";

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send('Obtener todos los productos');
  });

  export default userRoutes