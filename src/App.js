import './App.css';

import {Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
 import Signup from './pages/Signup';
import Container from './pages/Signin'
function App() {
  return (
    <div className="App">
      <Signup />
      {/* <Container /> */}
      {/* <Router>
      <Switch>

        <Route path="/page3">
      
        <Container/>
        </Route>

        <Route path='/'>
        <Container />
        </Route>
     
      <Login />
      </Switch>
      </Router> */}
    </div>
  );
}

export default App;
