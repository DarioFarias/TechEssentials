import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Cart extends Model{}

Cart.init({
    idUser: {
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
    }
}, {
    sequelize: dataBase,
    modelName: "Cart"
})

export default Cart