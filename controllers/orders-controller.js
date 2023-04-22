import * as ordersDao from "../orders/orders-dao.js";

const OrderController = (app) => {
  app.get("/api/orders", findAllOrders);
  app.get("/api/orders/user/:id", findOrdersByUserId);
  app.post("/api/orders", createOrder);
  app.delete("/api/orders/:id", deleteOrder);
};

const findAllOrders = async (req, res) => {
  const orders = await ordersDao.findAllOrders();
  res.json(orders);
};

const findOrdersByUserId = async (req, res) => {
  const userId = req.params.id;
  const ordersByUserId = await ordersDao.findOrdersByUserId(userId);
  res.json(ordersByUserId);
};

const createOrder = async (req, res) => {
  const order = req.body;
  order._id = new Date().getTime() + "";
  const newOrder = await ordersDao.createOrder(order);
  res.json(newOrder);
};

const deleteOrder = async (req, res) => {
  const orderId = req.params.id;
  const status = await ordersDao.delteteOrder(orderId);
  res.send(status);
};

export default OrderController;
