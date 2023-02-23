import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Image extends Model{}

Image.init({
    idProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
}, {
    sequelize: dataBase,
    modelName: "Image"
})

export default Image