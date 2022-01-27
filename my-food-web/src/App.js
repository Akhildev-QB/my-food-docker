import { useEffect, useState, Suspense } from "react";
import { URL } from "./utils/constants";
import FoodContainer from "./Components/FoodContainer";
import LoadingPage from "./Components/LoadingPage";

const App = () => {
  const [food, setFood] = useState();

  const fetchFood = async () => {
    const foodData = await fetch(`${URL}/food`);
    const { foodList } = await foodData.json();
    setFood(foodList);
  };

  const addFood = async () => {
    const response = await fetch(`${URL}/food`, { method: "POST" });
    if (response.status === 201) await fetchFood();
  };

  const removeFood = async (id) => {
    const response = await fetch(`${URL}/food/${id}`, { method: "DELETE" });
    if (response.status === 200) await fetchFood();
  };

  useEffect(() => fetchFood(), []);

  return (
    <div className="app">
      {food ? (
        <Suspense fallback={<LoadingPage />}>
          <div className="app_heading">
            <span>Food</span>
            <span>App</span>
          </div>
          <FoodContainer
            food={food}
            addFood={addFood}
            removeFood={removeFood}
          />
        </Suspense>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default App;
