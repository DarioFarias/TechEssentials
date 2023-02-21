import express from "express"


const app = express();

// Requerir archivo de rutas para usuarios
const usersRouter = require('./routes/users');

// Usar archivo de rutas para usuarios

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});