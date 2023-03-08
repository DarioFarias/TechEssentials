import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";
import Order from "./Order.js";
import Product from "./Product.js";

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

OrderProduct.beforeBulkCreate(async (orderProducts) => {
    let totalProducts = 0;
    for (let i = 0; i < orderProducts.length; i++) {
        const product = orderProducts[i];
        totalProducts += product.price * product.quantity;
    }
    const reqOrder = { total: totalProducts, status: "pending" };
    const order = await Order.create(reqOrder);

    orderProducts.forEach((orderProduct) => {
        orderProduct.idOrder = order.id;
    });
});

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
