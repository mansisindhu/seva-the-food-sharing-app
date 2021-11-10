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

function App() {
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
          <FoodDetails />
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
      </Switch>

    </div>
  );
}

export default App;
