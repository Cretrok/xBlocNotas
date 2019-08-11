import React, {Component} from "react";

import "./Nota.css";

class Nota extends Component{
  render(){
    return(
      <div className="div_nota">
        <form>
          <label>
            <h2><input type="text" className="title_nota" name="title_nota" /></h2>
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