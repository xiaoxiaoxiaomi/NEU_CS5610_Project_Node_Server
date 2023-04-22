import mongoose from "mongoose";
import accountsSchema from "./accounts-schema.js";

const accountsModel = mongoose.model("accounts", accountsSchema);

export default accountsModel;
