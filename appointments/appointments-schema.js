import mongoose from "mongoose";

const appointmentsSchema = new mongoose.Schema(
  {
    _id: String,
    user_id: String,
    name: String,
    table: Number,
    time: Date,
  },
  { collection: "appointments" }
);

export default appointmentsSchema;
