import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiMenu3Line } from "react-icons/ri";
function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Links = () => (
    <>
      <li className="item">
        <a href="#home">Home</a>
      </li>
      <li className="item">
        <a href="#home">What Is GPT3?</a>
      </li>
      <li className="item">
        <a href="#home">Open All</a>
      </li>
      <li className="item">
        <a href="#home">Case Studies</a>
      </li>
      <li className="item">
        <a href="#home">Library</a>
      </li>
    </>
  );
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header__links">
          <Links />
        </ul>
        <div className="header__btns">
          <div className="in">Sign In</div>
          <div className="out">Sign Out</div>
        </div>
        <div className="header__menu">
          <div className="menu-btn" onClick={() => setToggleMenu(!toggleMenu)}>
            <RiMenu3Line />
            {toggleMenu && (
              <ul className="menu-links">
                <Links />
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
