import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Order extends Model{}

Order.init({
    idTicket: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.REAL,
        allowNull: false,
    }
}, {
    sequelize: dataBase,
    modelName: "Order"
})

export default Order