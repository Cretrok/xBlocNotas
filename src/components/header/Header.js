import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  state = {
    f: new Date()
  };
  lateralmovil(event) {
    const latIzq = document.querySelector(".lateral-izq");
    latIzq.classList.add("visible");
  }

  btnNewNota() {
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    this.setState({
      f: new Date()
    });
    let minutos = this.state.f.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    fetch(
      `https://coderoom-first-api-project.now.sh/${this.props.name}/data/`,
      {
        method: "POST",
        body: JSON.stringify({
          data: {
            title: "Nueva Nota",
            note: "",
            fecha:
              this.state.f.getDate() +
              " de " +
              meses[this.state.f.getMonth()] +
              " de " +
              this.state.f.getFullYear() +
              " a las " +
              this.state.f.getHours() +
              ":" +
              minutos
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(nota => {
        this.props.newNota(nota);
        console.log(nota);
      });
  }

  render() {
    let nav;
    let navMovil;
    if (this.props.name) {
      nav = (
        <nav className="nueva_nota">
          <ul>
            <li>
              <button onClick={this.btnNewNota.bind(this)}>Nueva Nota</button>
            </li>
          </ul>
        </nav>
      );
      navMovil = (
        <nav className="movil_phone">
          <ul>
            <li>
              <button onClick={this.lateralmovil.bind(this)}>Notas</button>
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
