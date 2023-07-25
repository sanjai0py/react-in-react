import React from "react";
import reactImg from "../assets/react.svg"
import "../style.css"

const MainPage = () => {
  return (
    <main className="hero">
      <img className="hero-img" src={reactImg} alt="reactLogo" />
      <div className="hero-cont">
        <h1>React</h1>
        <p>The library for web and native user interfaces</p>
      </div>
      <div className="hero-btn-cont">
        <button className="btn btn-small">Learn react</button>
        <button className="btn btn-small">API reference</button>
      </div>
    </main>
  );
};

export default MainPage;
