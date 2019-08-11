import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  state = {
    notas: []
  };
  componentDidMount() {
    fetch(`https://coderoom-first-api-project.now.sh/${this.props.name}/data`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.reverse();
        this.setState.notas = data;
      });
  }

  busqueda(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" onInput={this.busqueda} />
        </form>
        <nav>
          <ol>
            {this.state.notas.map((nota, index) => {
              return (
                <li key={index}>
                  <div>
                    <h2>{nota.data.title}</h2>
                    <p>{nota.data.fecha}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    );
  }
}

export default Nav;
