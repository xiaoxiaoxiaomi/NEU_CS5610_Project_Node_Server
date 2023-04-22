import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    _id: String,
    user_id: String,
    dish_id: String,
    dish_name: String,
  },
  { collection: "orders" }
);

export default ordersSchema;
