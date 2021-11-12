import './App.css';

import {Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
 import Signup from './pages/Signup';
import Container from './pages/Signin'
import Role from './pages/Role/Roles';
import Slider from "./pages/Inroductry/Slider"
function App() {
  return (
    <div className="App">
     <Router>
    <Switch>


      <Route path='/up'>
      <Signup/>
      </Route>

      <Route path="/">
      <Slider/>
      </Route>
      </Switch>
      </Router>



    </div>
  );
}

export default App;
