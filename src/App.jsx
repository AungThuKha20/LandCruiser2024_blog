import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "animate.css";
import About from "./Components/About";
import Comparison from "./Components/Comparison";
import "@mantine/carousel/styles.css";

import { Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import Footer from "./Components/footer";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Comparison />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
