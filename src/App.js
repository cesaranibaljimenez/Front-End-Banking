import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import Deposit from './Components/Deposit';
import Balance from './Components/Balance';
import AllData from './Components/AllData';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/Login/" component={Login} />
        <Route path="/Deposit/" component={Deposit} />
        <Route path="/Balance/" component={Balance} />
        <Route path="/AllData/" component={AllData} />
      </Switch>
    </Router>
  );
}

export default App;
