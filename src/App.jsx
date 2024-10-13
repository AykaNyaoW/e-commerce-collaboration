import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Home from "./pages/Home";

const App = () => {
  return (
  <div>
    <Header/>
    <Navbar/>
    <Home/>
  </div>
  );
};

export default App;
