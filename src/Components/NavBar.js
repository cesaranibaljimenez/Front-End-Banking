import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">BadBank</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/CreateAccount/">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login/">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Deposit/">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Withdraw/">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Balance/">Balance</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AllData/">AllData</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;