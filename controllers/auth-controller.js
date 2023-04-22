import * as accountsDao from "../accounts/accounts-dao.js";

const AuthController = (app) => {
  app.post("/api/accounts/register", register);
  app.post("/api/accounts/login", login);
  app.post("/api/accounts/logout", logout);
};

const register = async (req, res) => {
  const username = req.body.username;
  const account = await accountsDao.findAccountByUsername(username);
  if (account) {
    res.sendStatus(409);
    return;
  }
  const newAccount = await accountsDao.createAccount(req.body);
  req.session["currentAccount"] = newAccount;
  res.json(newAccount);
};

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const account = await accountsDao.findAccountByCredentials(
    username,
    password
  );
  if (account) {
    req.session["currentAccount"] = account;
    res.json(account);
  } else {
    res.sendStatus(404);
  }
};

const logout = async (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

export default AuthController;
