import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { UserProvider } from './context';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import Transfers from './Components/Transfers';
import AllData from './Components/AllData';





function App() {
          

  return (
    <UserProvider>
   <Router>
        <NavBar />
      <h1>Welcome to FullStack Bank</h1>  
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/Login/" element={<Login />} />
          <Route path="/Deposit/" element={<Deposit />} />
          <Route path="/Withdraw/" element={<Withdraw />} />
          <Route path="/Transfers/" element={<Transfers/>}/>
          <Route path="/AllData/" element={<AllData />} />
        </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
