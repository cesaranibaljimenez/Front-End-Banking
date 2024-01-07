import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import Balance from './Components/Balance';
import AllData from './Components/AllData';
import UserContext from './Context/context'; // Ruta correcta al contexto



function App() {
  return (
    <Router>
      <h1>Welcome to Band Bank</h1>
      <NavBar />
      <Switch>
        <UserContext.Provider value={{users:[{name:'cesar', email: 'cesar@mit.edu', password:'secret',balance:100}]}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/Login/" component={Login} />
          <Route path="/Deposit/" component={Deposit} />
          <Route path="/Withdraw" component={Withdraw} />
          <Route path="/Balance/" component={Balance} />
          <Route path="/AllData/" component={AllData} />
        </UserContext.Provider>
        </Switch>
        
    </Router>
  );
}

export default App;
