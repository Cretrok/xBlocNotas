import React, { Component } from "react";

import Header from "../header/Header";
import Nav from "../nav/Nav";
import Nota from "../nota/Nota";

import "./Index.css";

class Index extends Component {
  state = {
    nameUser: "cesar",
    notaActiva: 0,
    notas: []
  };

  componentDidMount() {
    //let notas = {...this.state.notas}
    fetch(
      `https://coderoom-first-api-project.now.sh/${this.state.nameUser}/data/`
    )
      .then(response => response.json())
      .then(notas => {
        notas.reverse();
        this.setState({ notas: notas });
      });
  }
  updateNota = updatedNota => {
    this.setState({
      notas: this.state.notas.map(nota => {
        if (nota.id === updatedNota.id) {
          return updatedNota;
        }
        return nota;
      })
    });
  };
  render() {
    return (
      <div className="contenedor">
        <Nav
          name={this.state.nameUser}
          nota={this.state.notaActiva}
          notasArray={this.state.notas}
        />
        <Header name={this.state.nameUser} nota={this.state.notaActiva} />
        <Nota
          name={this.state.nameUser}
          nota={this.state.notaActiva}
          notasArray={this.state.notas}
          updateNota={this.updateNota}
        />
      </div>
    );
  }
}

export default Index;
