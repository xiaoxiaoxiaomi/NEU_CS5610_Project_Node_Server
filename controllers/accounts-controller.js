import * as accountsDao from "../accounts/accounts-dao.js";
import * as ordersDao from "../orders/orders-dao.js";

const AccountController = (app) => {
  app.get("/api/accounts", findAllAccounts);
  app.get("/api/accounts/:id", findAccountById);
  app.get("/api/accounts/dish/:id", findAllAccountsByDishId);
  // app.get("/api/accounts/:username/:password", findAccountByCredentials);
  app.post("/api/accounts", createAccount);
  app.delete("/api/accounts/:id", deleteAccount);
  app.put("/api/accounts/:id", updateAccount);
};

const findAllAccounts = async (req, res) => {
  let accounts;
  switch (req.query.type) {
    case "user":
      accounts = await accountsDao.findAllUsers();
      break;
    case "employee":
      accounts = await accountsDao.findAllEmployees();
      break;
    case "cook":
      accounts = await accountsDao.findAllCooks();
      break;
    case "waiter":
      accounts = await accountsDao.findAllWaiters();
      break;
    default:
      accounts = await accountsDao.findAllAccounts();
  }
  res.json(accounts);
};

const findAccountById = async (req, res) => {
  const aid = req.params.id;
  const account = await accountsDao.findAccountById(aid);
  res.json(account);
};

// const findAccountByCredentials = async (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const account = await accountsDao.findAccountByCredentials(
//     username,
//     password
//   );
//   res.json(account);
// };

const createAccount = async (req, res) => {
  const account = req.body;
  account._id = new Date().getTime() + "";
  const newAccount = await accountsDao.createAccount(account);
  res.json(newAccount);
};

const deleteAccount = async (req, res) => {
  const aid = req.params.id;
  const status = await accountsDao.deleteAccount(aid);
  res.send(status);
};

const updateAccount = async (req, res) => {
  const aid = req.params.id;
  const updates = req.body;
  const status = await accountsDao.updateAccount(aid, updates);
  res.send(status);
};

const findAllAccountsByDishId = async (req, res) => {
  try {
    const dishId = req.params.id;
    const orders = await ordersDao.findOrdersByDishId(dishId);
    const accountIds = orders.map((order) => order.user_id);
    const accounts = await accountsDao.findAccountsByIds(accountIds);
    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export default AccountController;
