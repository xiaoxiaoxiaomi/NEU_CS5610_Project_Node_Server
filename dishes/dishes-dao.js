import dishesModel from "./dishes-model.js";

export const findAllDishes = () => dishesModel.find();

export const findDishById = (did) => dishesModel.findById(did);

export const findDishesByKeyword = (keyword) =>
  dishesModel.find({ name: { $regex: keyword, $options: "i" } });

export const createDish = (dish) => dishesModel.create(dish);

export const deleteDish = (did) => dishesModel.deleteOne({ _id: did });

export const updateDish = (did, dish) =>
  dishesModel.updateOne({ _id: did }, dish);
