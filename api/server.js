import express from "express"
import routes from "./src/routes/index.js"
import dataBase from "./src/config/dataBase.js"
import "dotenv/config"
import { User, Product, Category, Image, Ticket, Order, Cart, Card, Adress } from "./src/models/Index.js"

const app = express();

const port = process.env.API_PORT;

app.use("/api", routes)

await dataBase.sync({force: true}).then(
  ()=>{
    app.listen(port, () => {
      console.log(`Servidor iniciado en el puerto ${process.env.API_PORT}`);
    
  }
)
});