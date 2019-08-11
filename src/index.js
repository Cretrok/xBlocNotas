import React from "react";
import ReactDOM from "react-dom";

import Index from "./components/index/Index";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
