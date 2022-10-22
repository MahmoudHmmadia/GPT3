import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Landing from "./components/landing/Landing";
import Companies from "./components/companies/Companies";
import WhatISGPT3 from "./components/what is gpt3/WhatISGPT3";
import Features from "./components/features/Features";
import Possibility from "./components/possibility/Possibility";
import Register from "./components/register/Register";
import Blog from "./components/blog/Blog";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <div className="home">
        <Header />
        <Landing />
      </div>
      <Companies />
      <WhatISGPT3 />
      <div className="gradient-circle">
        <Features />
        <Possibility />
      </div>
      <Register />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
