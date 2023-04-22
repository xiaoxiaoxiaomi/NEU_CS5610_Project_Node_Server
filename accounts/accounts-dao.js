import accountsModel from "./accounts-model.js";

export const findAllAccounts = () => accountsModel.find();

export const findAllUsers = () => accountsModel.find({ role: "user" });

export const findAllEmployees = () =>
  accountsModel.find({ role: { $ne: "user" } });

export const findAllCooks = () => accountsModel.find({ role: "cook" });

export const findAllWaiters = () => accountsModel.find({ role: "waiter" });

export const findAccountById = (aid) => accountsModel.findById(aid);

export const findAccountsByIds = (aids) =>
  accountsModel.find({ _id: { $in: aids } });

export const findAccountByUsername = (username) =>
  accountsModel.findOne({ username });

export const findAccountByCredentials = (username, password) =>
  accountsModel.findOne({ username, password });

export const createAccount = (account) => accountsModel.create(account);

export const deleteAccount = (aid) => accountsModel.deleteOne({ _id: aid });

export const updateAccount = (aid, account) =>
  accountsModel.updateOne({ _id: aid }, account);
