// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">HomeThings</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/electrodomesticos">Electrodomesticos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/herramientas">Herramientas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/iluminacion">Iluminación</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/electronica">Electrónicos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/audio">Audio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/ropa">Ropa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/otros">Otros</Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;