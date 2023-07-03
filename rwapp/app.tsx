// ===========================================================================
/// <summary>
/// app.tsx
/// project
/// created by Mehrdad Soleimanimajd on 01.04.2023
/// </summary>
/// <created>ʆϒʅ, 01.04.2023</created>
/// <changed>ʆϒʅ, 03.07.2023</changed>
// ===========================================================================

// template reference:
// https://reactjsexample.com/hello-react-create-a-minimalist-react-app/

import * as React from "react";
import ReactDom from "react-dom";

// TODO research how to or replace template to a working css through webpack
// import './app.css'

function App() {
  return <p>hello world ! :|</p>;
}

ReactDom.render(<App />, document.querySelector("#root"));
