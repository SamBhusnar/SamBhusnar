import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar title="NetraRobotics" aboutText="About" Link="Contact Us" />
      <Textform heading="Enter text to analyze" />
    </>
  );
}
export default App;
