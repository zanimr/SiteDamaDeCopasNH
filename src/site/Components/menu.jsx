import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
            
        <a className="navbar-brand" href="/#">
          <img src="Images/logo.png" alt="" height="100" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#banner">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#footer">Contato</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/politica-de-privacidade">Política de Privacidade</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/promocao">Promoção</Link>
            </li>
          </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default Menu;