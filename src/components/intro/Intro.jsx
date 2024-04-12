import React from 'react'
import "./intro.scss"

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="\assests\me_code.png" alt="" />
       
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Chloe O.</h1>
          <h3>Freelance Web Designer<span></span></h3>
        </div>
        <a href='assests/down.png' alt=""/>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}