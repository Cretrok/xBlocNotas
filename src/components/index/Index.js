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
        this.setState({ notas });
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

  updateActiva = updatedActiva => {
    //let notaActiva = {...this.state.notaActiva}
    this.setState({ notaActiva: updatedActiva });
  };

  deleteNota = deletedNota => {
    this.setState({
      notas: this.state.notas.filter(nota => nota.id !== deletedNota),
      notaActiva: 0
    });
  };

  newNota = notaNew => {
    /*this.setState({
      notas: this.state.notas.unshift(notaNew)
    });*/
    /*fetch(
      `https://coderoom-first-api-project.now.sh/${this.state.nameUser}/data/`
    )
      .then(response => response.json())
      .then(notas => {
        notas.reverse();
        this.setState({ notas: notas });
      });*/
    this.setState({
      notas: [...this.state.notas, notaNew],
      notaActiva: this.state.notas.length
    });
  };
  render() {
    console.log(this.state.notas);
    return (
      <div className="contenedor">
        <Nav
          name={this.state.nameUser}
          nota={this.state.notaActiva}
          notasArray={this.state.notas}
          updateActiva={this.updateActiva}
        />
        <Header
          name={this.state.nameUser}
          nota={this.state.notaActiva}
          newNota={this.newNota}
        />
        <Nota
          name={this.state.nameUser}
          nota={this.state.notaActiva}
          notasArray={this.state.notas}
          updateNota={this.updateNota}
          deleteNota={this.deleteNota}
        />
      </div>
    );
  }
}

export default Index;
