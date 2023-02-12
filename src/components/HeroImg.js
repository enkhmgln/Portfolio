import "./HeroImgStyles.css";
import introImg from '../assets/intro.jpg'

import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img className="intro-img" src={introImg} alt='Одоогоор зураг байхгүй байна..'/>
    </div>
    <div className="content">
      <p>HI, IM ENKHEE</p>
      <h1>Junior developer.</h1>
      <div>
        <Link to='/project' className="btn">Projects</Link>
        <Link to='/contact' className="btn btn-light">Contact</Link>
      </div>
    </div>
  </div>;
};

export default HeroImg;
