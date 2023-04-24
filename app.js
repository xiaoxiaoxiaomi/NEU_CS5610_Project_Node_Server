import express from "express";
import cors from "cors";
import session from "express-session";
import AuthController from "./controllers/auth-controller.js";
import AccountController from "./controllers/accounts-controller.js";
import DishController from "./controllers/dishes-controller.js";
import OrderController from "./controllers/orders-controller.js";
import AppointmentController from "./controllers/appointments-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/restaurant";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
AuthController(app);
AccountController(app);
DishController(app);
OrderController(app);
AppointmentController(app);
const port = process.env.PORT || 4000;
app.listen(port);
