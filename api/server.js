import express from "express"
import morgan from "morgan"
import routes from "./src/routes/index.js"
import dataBase from "./src/config/dataBase.js"
import "dotenv/config"
import { User, Product, Category, Image, Ticket, Order, Cart, Card, Adress } from "./src/models/Index.js"

const app = express();

const port = process.env.API_PORT;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))

app.use("/tessentials", routes)

await dataBase.sync({force: false}).then(
  ()=>{
    app.listen(port, () => {
      console.log(`Servidor iniciado en el puerto ${process.env.API_PORT}`);
    
  }
)
});