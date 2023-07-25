import React from "react";
import mainImg from "../assets/mainImg.png";
import "../style.css";

const SubPage = ({ mainText, mainContentTop, mainContentBtm, alt }) => {
  const val = alt === "alt" ? "dark-cont" : "light-cont"
  return (
    <div className={`sub-container ${val}`}>
      <h2 className="sub-mainTxt">{mainText}</h2>
      <p className="sub-content"> {mainContentTop}</p>
      <img className="sub-img" src={mainImg} />
      <p className="sub-content"> {mainContentBtm}</p>
    </div>
  );
};

export default SubPage;
