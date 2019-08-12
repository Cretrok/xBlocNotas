import React, {Component} from "react";

import "./Nota.css";

class Nota extends Component{
  titleInput(e){
    if( e.target.value.length >= 21){
      e.target.value = e.target.value.substring(0, 40);
    }
  }
  render(){
    return(
      <div className="div_nota">
        <form>
          <label>
            <input type="text" className="title_nota" name="title_nota" onInput={this.titleInput} />
          </label>
          <label>
            <textarea ></textarea>
          </label>
        </form>
      </div>
    )
  }
}

export default Nota;