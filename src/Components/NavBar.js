import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">BadBank</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/CreateAccount/" title="Create a user account">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login/" title="Log in with your user account">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Deposit/" title="Make a deposit transaction">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Withdraw/" title="Make a witdrawal transaction">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AllData/" title="View transaction movement">AllData</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;