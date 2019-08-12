import React, { Component } from "react";

import Header from "../header/Header";
import Nav from "../nav/Nav";
import Nota from "../nota/Nota";

import "./Index.css";

class Index extends Component {
  state = {
    nameUser: "cesar",
    notaActiva: ""
  };
  render() {
    return (
      <div className="contenedor">
        <Nav name={this.state.nameUser} nota={this.state.notaActiva} />
        <Header name={this.state.nameUser} nota={this.state.notaActiva} />
        <Nota name={this.state.nameUser} nota={this.state.notaActiva} />
      </div>
    );
  }
}

export default Index;
