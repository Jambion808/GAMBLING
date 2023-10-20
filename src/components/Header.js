/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import langLogo from "../images/Union.svg";
import burgerIcon from "../images/Burger.svg";
import closeIcon from "../images/closeburger.svg";

function Header() {

  const [isLanguage, setIsLaguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false)

  const handleLangToggle = () => {
    setIsLaguage(preLang => (preLang === 'EN' ? 'RU' : 'EN'));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <header className="header">

      <div className="header__container">
        <img className="header__en-icon" src={langLogo} alt="план" />
        <div className={`header__container-burger ${isOpen ? 'burger_open' : ''}`}>
          <div className="header__burger">
            <img className="header__burger-image" src={isOpen ? closeIcon : burgerIcon} 
            alt={isOpen ? 'крестик' : 'бургер'} onClick={toggleMenu}></img>
          </div>
          <nav className="burger__list">
            <ul className="burger__list-items">
              <li className="burger__list-item">
                <a className="burder__list-link" href="#">About us</a></li> 
              <li className="burger__list-item">
              <a className="burder__list-link" href="#">Brands</a></li>
              <li className="burger__list-item">
                <a className="burder__list-link" href="#">Commissions</a></li>
              <li className="burger__list-item">
                <a className="burder__list-link" href="#">News</a></li>
              <li className="burger__list-item">
                <a className="burder__list-link" href="#">Contact us</a></li>
              <li className="burger__list-item">
                <a className="burder__list-link" href="#">Careers</a></li>
            </ul>
            <ul className="header__burger-auth">
              <li className="header__burger-auth-item">
                <a className="header__burger-auth-link" href="#">LOG IN</a>
              </li>
              <li className="header__burger-auth-item header__burger-auth-item_bottom">
                <a className="header__burger-auth-link header__burger-auth-link_bottom" href="#">SIGN UP</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* <div className="header__logo" /> */}
        <ul className="header__nav-items">
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">About us</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Brands</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Commissions</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">News</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Contact us</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Careers</a>
          </li>
        </ul>
        <ul className="header__auth-items">
          <li className="header__auth-item">
            <img className="header__lang-icon" src={langLogo} alt="план" />
            <a className="header__auth-link" href="#" onClick={handleLangToggle}>{isLanguage}</a>
          </li>
          <li className="header__auth-item">
            <a className="header__auth-link" href="#">LOG IN</a>
          </li>
          <li className="header__auth-item">
            <a className="header__auth-link" href="#">SIGN UP</a>
          </li>
        </ul>
      </div>

    </header>
  );
}

export default Header;
