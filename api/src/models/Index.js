import User from "./User.js";
import Product from "./Product.js";
import Category from "./Category.js";
import Image from "./Image.js";
import Ticket from "./Ticket.js";
import Order from "./Order.js";
import Cart from "./Cart.js";
import Card from "./Card.js";
import Adress from "./Adress.js";

User.hasMany(Ticket, {
  foreignKey: {
    name: "idUser",
    allowNull: true,
  },
});

User.hasMany(Adress, {
  foreignKey: { name: "idUser", allowNull: false },
});

User.hasMany(Card, {
  foreignKey: { name: "idUser", allowNull: false },
});

User.hasMany(Cart, {
  foreignKey: { name: "idUser", allowNull: false },
  unique:true,
});

Ticket.belongsTo(User, {
  foreignKey: {
    name: "idUser",
    allowNull: false,
  },
});

Ticket.hasMany(Order, {
  foreignKey: {
    name: "idTicket",
    allowNull: false,
  },
});

Product.belongsTo(Category, {
  foreignKey: {
    name: "idCategory",
    allowNull: false,
  },
});

Product.hasMany(Image, {
  foreignKey: {
    name: "idProduct",
    allowNull: false,
  },
});

Product.hasMany(Order, {
  foreignKey: {
    name: "idProduct",
    allowNull: false,
  },
});

Product.hasOne(Cart, {
  foreignKey: {
    name: "idProduct",
    allowNull: false,
  },
});

Image.belongsTo(Product, {
  foreignKey: {
    name: "idProduct",
    allowNull: false,
  },
});

Category.hasMany(Product, {
  foreignKey: {
    name: "idCategory",
    allowNull: false,
  },
});

Card.belongsTo(User, {
  foreignKey: {
    name: "idUser",
    allowNull: false,
  },
});

Adress.belongsTo(User, {
  foreignKey: {
    name: "idUser",
    allowNull: false,
  },
});

Order.belongsTo(Product, {
  foreignKey: {
    name: "idProduct",
    allowNull: false,
  },
});

Order.belongsTo(Ticket, {
  foreignKey: {
    name: "idTicket",
    allowNull: false,
  },
});

Cart.belongsTo(Product, {
  foreignKey: {
    name: "idProduct",
    allowNull: false,
  },
});

Cart.belongsTo(User, {
  foreignKey: {
    name: "idUser",
    allowNull: false,
  },
});

export { User, Product, Category, Image, Ticket, Order, Cart, Card, Adress };
