const FoodItem = ({ foodItem, removeFood }) => {
  return (
    <div className="food_item">
      <img
        className="food_item_image"
        src={foodItem.image}
        alt={foodItem.name}
      />
      <p className="food_item_delete" onClick={() => removeFood(foodItem._id)}>
        &#215;
      </p>
      <p className="food_item_name">{foodItem.name}</p>
      <p className="food_item_category">{foodItem.category}</p>
      <p className="food_item_text">{foodItem.area}</p>
    </div>
  );
};

export default FoodItem;
