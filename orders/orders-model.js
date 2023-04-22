import mongoose from "mongoose";
import ordersSchema from "./orders-schema.js";

const ordersModel = mongoose.model("orders", ordersSchema);

export default ordersModel;
