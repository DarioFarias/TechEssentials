import express from "express"
import routes from "./src/routes/index.js"
import dataBase from "./src/config/dataBase.js"
import "dotenv/config"
import User from "./src/models/user.js"
import Ticket from "./src/models/Ticket.js"
import Product from "./src/models/Product.js"
import Order from "./src/models/Order.js"
import Image from "./src/models/Image.js"
import Category from "./src/models/Category.js"
import Cart from "./src/models/Cart.js"
import Card from "./src/models/Card.js"
import Adress from "./src/models/Adress.js"

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