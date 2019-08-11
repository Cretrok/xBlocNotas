import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  lateralmovil(event){
    const latIzq = document.querySelector('.lateral-izq');
    latIzq.classList.add("visible");
  }
  render() {
    let nav;
    let navMovil;
    if (this.props.name) {
      nav = (
        <nav className="nueva_nota">
          <ul>
            <li>
              <button>Nueva Nota</button>
            </li>
          </ul>
        </nav>
      );
      navMovil = (
        <nav className="movil_phone">
          <ul>
            <li>
              <button onClick={this.lateralmovil}>Notas</button>
            </li>
          </ul>
        </nav>
      );
    }
    return (
      <header className="header">
        <div className="container">
          {navMovil}
          <a href="/">
            <h1 className="title">XBlocNotas</h1>
          </a>
          {nav}
        </div>
      </header>
    );
  }
}

export default Header;
