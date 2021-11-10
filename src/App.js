import "./App.css";
import data from "./data.json";

import HomePage from "./pages/HomePage";
import AllNGOS from "./pages/AllNGOS";
import NGOPage from "./pages/NGOPage";
import FoodDetails from "./pages/FoodDetails";
import CategorySelection from "./pages/CategorySelection";
import ChooseRole from "./pages/ChooseYourRole"
import DeliverSelection from "./pages/DeliverSelection";
import DonationSelection from "./pages/DonationSelection"

import { Switch, Route } from 'react-router-dom'
import ConfirmFoodDetails from "./pages/ConfirmFoodDetails";
import { useState } from "react";

function App() {
  const [foodData, setFoodData] = useState({ type: "", meal: "", quantity: 0 });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFoodData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  console.log(foodData);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage data={data} />
        </Route>

        <Route path="/category" exact>
          <CategorySelection />
        </Route>

        <Route path="/all" exact>
          <AllNGOS data={data} />
        </Route>

        <Route path="/all/:id" exact>
          <NGOPage />
        </Route>

        <Route path="/foodDetails" exact>
          <FoodDetails handleInput={handleInput} />
        </Route>

        <Route path="/delivery" exact>
          <DeliverSelection />
        </Route>

        <Route path="/chooseRole" exact>
          <ChooseRole />
        </Route>

        <Route path="/donationType" exact>
          <DonationSelection />
        </Route>

        <Route path="/confirmFoodDetails" exact>
          <ConfirmFoodDetails foodData={foodData} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
