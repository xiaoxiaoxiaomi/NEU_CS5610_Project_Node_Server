import mongoose from "mongoose";

const accountsSchema = new mongoose.Schema(
  {
    _id: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String,
    birthday: Date,
    phone: String,
    email: String,
    role: {
      type: String,
      enum: ["admin", "user", "cook", "waiter"],
    },
  },
  { collection: "accounts" }
);

export default accountsSchema;
