import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema(
  {
    _id: String,
    name: { type: String, unique: true, required: true },
    price: Number,
    chef: String,
    ingredients: [String],
    description: String,
    image: String,
  },
  { collection: "dishes" }
);

export default dishesSchema;
