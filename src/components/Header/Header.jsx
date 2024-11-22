/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/components/Header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="headerLogo">
        <a href="/">MyPortfolio</a>
      </div>
      <nav className="headerNav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="headerCta">
        <button className="hireMeBtn">Hire Me</button>
      </div>
    </header>
  );
};

export default Header;
