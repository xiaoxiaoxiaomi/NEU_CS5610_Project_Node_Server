import ordersModel from "./orders-model.js";

export const findAllOrders = () => ordersModel.find();

export const findOrdersByUserId = (uid) => ordersModel.find({ user_id: uid });

export const findOrdersByDishId = (did) => ordersModel.find({ dish_id: did });

export const createOrder = (order) => ordersModel.create(order);

export const delteteOrder = (oid) => ordersModel.deleteOne({ _id: oid });
