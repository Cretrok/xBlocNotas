import React, { Component } from "react";

import "./Nota.css";

class Nota extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notas: []
    };
  }
  titleInput(e) {
    if (e.target.value.length >= 21) {
      e.target.value = e.target.value.substring(0, 40);
    }
  }

  onChangeTitle(e) {
    fetch(
      `https://coderoom-first-api-project.now.sh/${this.props.name}/data/${
        e.target.id
      }`,
      {
        method: "PUT",
        body: JSON.stringify({
          data: {
            title: e.target.value
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(nota => {
        this.props.updateNota(nota);
      });
  }

  onChangeNote(e) {
    //console.log(e.target.id);
    fetch(
      `https://coderoom-first-api-project.now.sh/${this.props.name}/data/${
        e.target.id
      }`,
      {
        method: "PUT",
        body: JSON.stringify({
          data: {
            note: e.target.value
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(nota => {
        this.props.updateNota(nota);
      });
  }

  componentDidMount() {
    if (this.props.name) {
      fetch(`https://15xm3.sse.codesandbox.io/${this.props.name}/data`)
        .then(response => response.json())
        .then(data => {
          //console.log(data);
          data.reverse();
          this.setState({ notas: data });
        });
    }
  }
  render() {
    const listNote = this.props.notasArray.map((nota, index) => {
      let activa = "";
      if (index === this.props.nota) {
        activa = "active";
      }
      return (
        <form key={index} className={activa + " contenedor_nota"}>
          <button className="btn_eliminar" id={nota.id}>
            Eliminar
          </button>
          <label>
            <input
              defaultValue={nota.data.title}
              type="text"
              className="title_nota"
              name="title"
              onInput={this.titleInput}
              id={nota.id}
              onChange={this.onChangeTitle.bind(this)}
            />
          </label>
          <label>
            <textarea
              name="note"
              defaultValue={nota.data.note}
              id={nota.id}
              onChange={this.onChangeNote.bind(this)}
            />
          </label>
        </form>
      );
    });

    return (
      <div className="div_nota">
        <div className="forms">{listNote}</div>
      </div>
    );
  }
}

export default Nota;
