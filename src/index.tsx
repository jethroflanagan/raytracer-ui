import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import { Raytracer } from "./Raytracer";

function App() {
  return (
    <div className="App">
      <h1>Hello CodesSandbox</h1>
      <Raytracer />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
