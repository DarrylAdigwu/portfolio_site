import React from "react";
import { Link } from "react-router";
import logo from "../assets/images/bare-logo.png"

export default function Header() {
  
  function dropDown(event) {
    const offScreen = document.getElementById("off-screen");
    if(event) {
      offScreen.classList.toggle("active")
    }
  }
  
  return(
    <header>
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
        <button id="exit-button" onClick={dropDown}>&times;</button>
        <li onClick={dropDown}><a href="#about-section">about</a></li>
        <li onClick={dropDown}><a href="#skills-section">skills</a></li>
        <li onClick={dropDown}><a href="#projects-section">projects</a></li>
        <li onClick={dropDown}><a href="#contact-section">contact</a></li>
      </nav>
    </header>
  )
}