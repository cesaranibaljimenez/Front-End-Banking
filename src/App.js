import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './context';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import Balance from './Components/Balance';
import AllData from './Components/AllData';




function App() {
          console.log('Renderizado App');

  return (
    <UserContext.Provider value={{ users: [] }}>
   <Router>
      <h1>Welcome to Band Bank</h1>
      <NavBar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/Login/" component={Login} />
          <Route path="/Deposit/" component={Deposit} />
          <Route path="/Withdraw" component={Withdraw} />
          <Route path="/Balance/" component={Balance} />
          <Route path="/AllData/" component={AllData} />
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
