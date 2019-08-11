import React, { Component } from "react";

import Header from "../header/Header";
import Nav from "../nav/Nav";

import "./Index.css";

class Index extends Component {
  state = {
    nameUser: ""
  };
  render() {
    return (
      <div className="contenedor">
        <Header name={this.state.nameUser} />
        <Nav />
      </div>
    );
  }
}

export default Index;
