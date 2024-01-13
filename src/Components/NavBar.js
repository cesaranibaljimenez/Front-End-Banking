import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">BadBank</Link>
      <button className="navbar-toogler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
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