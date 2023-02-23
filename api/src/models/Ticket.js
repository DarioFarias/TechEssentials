import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Ticket extends Model{}

Ticket.init({
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: DataTypes.REAL,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize: dataBase,
    modelName: "Ticket"
})

export default Ticket