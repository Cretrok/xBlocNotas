import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  render() {
    let nav;
    let navMovil;
    if (this.props.name) {
      nav = (
        <nav>
          <ul>
            <li>
              <a href="/">Nueva Nota</a>
            </li>
          </ul>
        </nav>
      );
      navMovil = (
        <nav className="movil_phone">
          <ul>
            <li>
              <a href="/">Notas</a>
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
