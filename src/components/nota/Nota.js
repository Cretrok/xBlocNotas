import React, {Component} from "react";

import "./Nota.css";

class Nota extends Component{
  render(){
    return(
      <div className="div_nota">
        <form>
          <label>
            <textarea ></textarea>
          </label>
        </form>
      </div>
    )
  }
}

export default Nota;