import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "animate.css";
import About from "./Components/About";
import Comparison from "./Components/Comparison";
import "@mantine/carousel/styles.css";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Comparison />
    </div>
  );
};

export default App;
