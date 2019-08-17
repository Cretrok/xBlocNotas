import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notas: [],
      inputFilter: ""
    };
  }
  componentDidMount() {
    fetch(`https://15xm3.sse.codesandbox.io/${this.props.name}/data`)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        data.reverse();
        this.setState({ notas: data });
      });
  }

  busqueda(event) {
    this.setState({ inputFilter: event.target.value });
  }
  esconder(e) {
    const latIzq = document.querySelector(".lateral-izq");
    latIzq.classList.remove("visible");
  }

  updateAct(index) {
    console.log(index);
    this.props.updateActiva(index);
  }

  render() {
    const listNote = this.props.notasArray
      .filter(nota => {
        return (
          nota.id
            .toLowerCase()
            .includes(this.state.inputFilter.toLowerCase()) ||
          nota.data.title
            .toLowerCase()
            .includes(this.state.inputFilter.toLowerCase()) ||
          nota.data.note
            .toLowerCase()
            .includes(this.state.inputFilter.toLowerCase()) ||
          nota.data.fecha
            .toLowerCase()
            .includes(this.state.inputFilter.toLowerCase())
        );
      })
      .map((nota, index) => {
        let activa = "";
        if (index === this.props.nota) {
          activa = "active";
        }
        return (
          <li
            className={activa}
            key={index}
            onClick={() => this.updateAct(index)}
          >
            <div className="title-date-note">
              <h2>{nota.data.title}</h2>
              <p>{nota.data.fecha}</p>
            </div>
          </li>
        );
      });
    return (
      <div className="lateral-izq">
        <button onClick={this.esconder.bind(this)}>
          <span className="ion-md-arrow-dropleft-circle" />
        </button>
        <form>
          <input
            type="text"
            onInput={this.busqueda.bind(this)}
            placeholder="BUSCAR"
          />
        </form>
        <nav>
          <ol>{listNote}</ol>
        </nav>
      </div>
    );
  }
}

export default Nav;
