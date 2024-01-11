import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">BadBank</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/CreateAccount/" title="Crear Cuenta">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login/" title="Iniciar Sesión">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Deposit/" title="Realizar un depósito">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Withdraw/" title="Realizar un retiro">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AllData/" title="Ver cuentas">AllData</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;