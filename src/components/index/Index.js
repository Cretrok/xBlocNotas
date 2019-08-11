import React, { Component } from "react";

import Header from "../header/Header";
import Nav from "../nav/Nav";
import Nota from "../nota/Nota";

import "./Index.css";

class Index extends Component {
  state = {
    nameUser: "cesar"
  };
  render() {
    return (
      <div className="contenedor">
        <Nav />
        <Header name={this.state.nameUser} />
        <Nota />
      </div>
    );
  }
}

export default Index;
