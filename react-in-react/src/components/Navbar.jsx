import React from "react";
import reactImg from "../../public/react.svg";
import "../style.css";

const Navbar = () => {
  return (
    <nav>
      <img src={reactImg} />
      <button placeholder="Search" className="btn btn-search"></button>
    </nav>
    
  );
};

export default Navbar;
