import * as dishesDao from "../dishes/dishes-dao.js";

const DishController = (app) => {
  app.get("/api/dishes", findAllDishes);
  app.get("/api/dishes/:id", findDishById);
  app.get("/api/dishes/search/:keyword", findDishesByKeyword);
  app.post("/api/dishes", createDish);
  app.delete("/api/dishes/:id", deleteDish);
  app.put("/api/dishes/:id", updateDish);
};

const findAllDishes = async (req, res) => {
  const dishes = await dishesDao.findAllDishes();
  res.json(dishes);
};

const findDishById = async (req, res) => {
  const dishId = req.params.id;
  const dish = await dishesDao.findDishById(dishId);
  res.json(dish);
};

const findDishesByKeyword = async (req, res) => {
  const keyword = req.params.keyword;
  const dishes = await dishesDao.findDishesByKeyword(keyword);
  res.json(dishes);
};

const createDish = async (req, res) => {
  const dish = req.body;
  dish._id = new Date().getTime() + "";
  const newDish = await dishesDao.createDish(dish);
  res.json(newDish);
};

const deleteDish = async (req, res) => {
  const dishId = req.params.id;
  const status = await dishesDao.deleteDish(dishId);
  res.send(status);
};

const updateDish = async (req, res) => {
  const dishId = req.params.id;
  const newDish = req.body;
  const status = await dishesDao.updateDish(dishId, newDish);
  res.send(status);
};

export default DishController;
