import mongoose from "mongoose";
import appointmentsSchema from "./appointments-schema.js";

const appointmentsModel = mongoose.model("appointments", appointmentsSchema);

export default appointmentsModel;
