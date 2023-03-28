import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";
import Order from "./Order.js";
import Product from "./Product.js";
import Cart from "./Cart.js"

class OrderProduct extends Model {}

OrderProduct.init(
    {
        idOrder: {
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
        },
    },
    {
        sequelize: dataBase,
        modelName: "OrderProduct",
    }
);

OrderProduct.afterBulkCreate(async (orderProducts) => {
    for (let i = 0; i < orderProducts.length; i++) {
        const orderProduct = orderProducts[i];
        await Product.decrement("stock", {
            by: orderProduct.quantity,
            where: { id: orderProduct.idProduct },
        });
    }
});

export default OrderProduct;
