// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">LALALAND</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Electrodomesticos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Herramientas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Iluminación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Electrónicos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Audio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ropa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Otros</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;