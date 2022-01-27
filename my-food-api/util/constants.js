const FOOD_API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

module.exports = { FOOD_API_URL, STATUS_CODE };
