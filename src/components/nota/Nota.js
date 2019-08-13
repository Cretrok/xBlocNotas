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

  onChangeNote(e){
    console.log(e.target.id);
    fetch(`https://15xm3.sse.codesandbox.io/${this.props.name}/data/${e.target.id}`,{
      method: "PUT",
      body: JSON.stringify({
        data: {
          title: e.target.value
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
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
    const listNote = this.state.notas.map((nota, index) => {
      return (
        <div key={index} className="contenedor_nota">
          <label>
            <input
              defaultValue={nota.data.title}
              type="text"
              className="title_nota"
              name="title"
              onInput={this.titleInput}
              id={nota.id}
              onChange={this.onChangeNote.bind(this)}
            />
          </label>
          <label>
            <textarea name="note" defaultValue={nota.data.note} id={nota.id} onChange={this.onChangeNote.bind(this)}></textarea>
          </label>
        </div>
      );
    });

    return (
      <div className="div_nota">
        <form>{listNote}</form>
      </div>
    );
  }
}

export default Nota;
