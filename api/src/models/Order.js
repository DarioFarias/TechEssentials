import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Order extends Model{}

Order.init({
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: DataTypes.REAL,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
}, {
    sequelize: dataBase,
    modelName: "Order"
})

export default Order