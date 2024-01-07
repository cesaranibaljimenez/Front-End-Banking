import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(){
  return(
    <>
    <Link to="/">BadBank</Link>,
    <Link to="/CreateAccount/">Create Account</Link>,
    <Link to="/Login/">Login</Link>,
    <Link to="/Deposit/">Deposit</Link>,
    <Link to="/Withdraw/">Withdraw</Link>,
    <Link to="/Balance/">Balance</Link>,
    <Link to="/Alldata/">AllData</Link>
    </>
  );
}

export default NavBar;