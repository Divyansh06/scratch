import React from "react";
import "App.css";
import "App.scss";
import SampleImage from "./assets/sample_scratch.jpg";

const App = () => (
  <div className="center">
    <h1 className="hello">Hello React!</h1>
    <img className="react-image" src={SampleImage} alt="Sample image"></img>
  </div>
);

export default App;
