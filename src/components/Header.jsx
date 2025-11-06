import React from "react";
import { Link } from "react-router";
import logo from "../assets/images/bare-logo.png"

export default function Header() {
  const dropDownRef = React.useRef();
  
  function dropDown(event) {
    const offScreen = document.getElementById("off-screen");
    const burgerBtn = document.getElementById("burger");
    const bodyScroll = document.body;
    if(event) {
      offScreen.classList.add("active");
      burgerBtn.classList.add("non-active");
      bodyScroll.style.overflow = "hidden";
    }
  }

  function cancelDropDown(event) {
    const offScreen = document.getElementById("off-screen");
    const burgerBtn = document.getElementById("burger");
    const bodyScroll = document.body;
    if(event) {
      offScreen.classList.remove("active");
      burgerBtn.classList.remove("non-active");
      bodyScroll.style.overflow = "scroll";
    }
  }
  
  return(
    <header id="header-section">
      <img src={logo} alt="logo" className="logo"/>
      <nav id="nav-bar">
        <li><a href="#about-section">about</a></li>
        <li><a href="#skills-section">skills</a></li>
        <li><a href="#projects-section">projects</a></li>
        <li><a href="#contact-section">contact</a></li>
      </nav>
      <nav id="burger" onClick={dropDown}>
        <li></li>
        <li></li>
        <li></li>
      </nav>
      <nav id="off-screen">
        <button id="exit-button" onClick={cancelDropDown}>&times;</button>
        <li onClick={cancelDropDown}><a href="#about-section">about</a></li>
        <li onClick={cancelDropDown}><a href="#skills-section">skills</a></li>
        <li onClick={cancelDropDown}><a href="#projects-section">projects</a></li>
        <li onClick={cancelDropDown}><a href="#contact-section">contact</a></li>
      </nav>
    </header>
  )
}