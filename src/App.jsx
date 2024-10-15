import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AuthRoutes from "./components/AuthRoutes";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <AuthRoutes /> {/* This will handle /login and /register routes */}
        <Home /> {/* This will be rendered for the home route */}
      </div>
    </Router>
  );
};

export default App;
