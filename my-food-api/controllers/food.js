const fetch = require("node-fetch");
const Food = require("../models/food");
const { FOOD_API_URL, STATUS_CODE } = require("../util/constants");
const { throwError, nextError } = require("../util/utils");

// constants
const FOOD_FETCHED = "Food data fetched succesfully";
const FOOD_FETCH_ERROR = "Error in fetching food data";
const FOOD_EXISTS = "Food already exists";
const FOOD_INSERTED = "Food inserted succesfully";
const FOOD_REMOVED = "Food removed succesfully";

exports.listFood = async (req, res, next) => {
  try {
    const foodList = await Food.find().select("_id name category area image");
    if (!foodList) throwError(FOOD_FETCH_ERROR, STATUS_CODE.BAD_REQUEST);

    res.status(STATUS_CODE.OK).json({ message: FOOD_FETCHED, foodList });
  } catch (err) {
    nextError(err, next);
  }
};

exports.addFood = async (req, res, next) => {
  try {
    const foodData = await fetch(FOOD_API_URL);
    const { meals } = await foodData.json();
    const foodId = meals[0].idMeal;

    const foodExists = await Food.findById(foodId);
    if (foodExists) throwError(FOOD_EXISTS, STATUS_CODE.BAD_REQUEST);

    const food = new Food({
      _id: foodId,
      name: meals[0].strMeal,
      category: meals[0].strCategory || "",
      area: meals[0].strArea || "",
      instructions: meals[0].strInstructions || "",
      image: meals[0].strMealThumb || "",
      source: meals[0].strSource || "",
      youtube: meals[0].strYoutube || "",
    });
    await food.save();

    res.status(STATUS_CODE.CREATED).json({ message: FOOD_INSERTED });
  } catch (err) {
    nextError(err, next);
  }
};

exports.removeFood = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Food.deleteOne({ _id: id });
    res.status(STATUS_CODE.OK).json({ message: FOOD_REMOVED });
  } catch (err) {
    nextError(err, next);
  }
};
