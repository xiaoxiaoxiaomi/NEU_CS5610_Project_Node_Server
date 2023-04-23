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
    attributes: {},
  },
  { collection: "accounts" }
);

const userSchema = new mongoose.Schema({
  favorates: String,
});

const cookSchema = new mongoose.Schema({
  specialty: String,
});

const waiterSchema = new mongoose.Schema({
  shift: String,
});

accountsSchema.add({
  user: userSchema,
  cook: cookSchema,
  waiter: waiterSchema,
});

export default accountsSchema;
