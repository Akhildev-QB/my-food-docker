import FoodItem from "./FoodItem";
import AddFoodItem from "./AddFoodItem";

const FoodContainer = ({ food, addFood, removeFood }) => {
  return (
    <div className="food_container">
      {food.map((foodItem) => (
        <FoodItem
          key={foodItem._id}
          foodItem={foodItem}
          removeFood={removeFood}
        />
      ))}
      <AddFoodItem addFood={addFood} />
    </div>
  );
};

export default FoodContainer;
