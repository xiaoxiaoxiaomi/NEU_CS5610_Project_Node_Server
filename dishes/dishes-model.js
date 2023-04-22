import mongoose from "mongoose";
import dishesSchema from "./dishes-schema.js";

const dishesModel = mongoose.model("dishes", dishesSchema);

export default dishesModel;
