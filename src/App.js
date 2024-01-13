import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './context';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import AllData from './Components/AllData';




function App() {
          

  return (
    <UserProvider>
   <Router>
      <h1>Welcome to Band Bank</h1>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/Login/" element={<Login />} />
          <Route path="/Deposit/" element={<Deposit />} />
          <Route path="/Withdraw" element={<Withdraw />} />
          <Route path="/AllData/" element={<AllData />} />
        </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
