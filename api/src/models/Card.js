import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Card extends Model{}

Card.init({
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cardNumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    expDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    cvv: {
        type: DataTypes.STRING(5),
        allowNull: false,
    }
}, {
    sequelize: dataBase,
    modelName: "Card"
})

export default Card