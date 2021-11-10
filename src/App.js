import "./App.css";

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
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [ngoData, setData] = useState(null);

  const getNgoData = async () => {
    const { data } = await axios.get("http://localhost:9900/ngos");
    setData([...data])
  }

  useEffect(() => {
    getNgoData()
  }, [])

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

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {ngoData ? <HomePage data={ngoData} /> : null}
        </Route>

        <Route path="/category" exact>
          <CategorySelection />
        </Route>

        <Route path="/all" exact>
          {ngoData ? <AllNGOS data={ngoData} /> : null}
        </Route>

        <Route path="/all/:id" exact>
          {ngoData ? <NGOPage data={ngoData} /> : null}
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
