/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import socialLogo1 from "../images/Socials1.svg";
import socialLogo2 from "../images/Socials2.svg";
import socialLogo3 from "../images/Socials3.svg";
import socialLogo4 from "../images/Socials4.svg";
import socialLogo5 from "../images/Socials5.svg";
import socialLogo6 from "../images/Socials6.svg";
import socialLogo7 from "../images/Socials7.svg";
import socialLogo8 from "../images/Socials8.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <ul className="footer__nav-items">
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">Terms & Conditions</a>
            </li>
          <li className="footer__nav-item">
          <a className="footer__nav-link" href="#">Cookies</a>
            </li>
          <li className="footer__nav-item">
          <a className="footer__nav-link" href="#">Contacts</a>
            </li>
          <li className="footer__nav-item">
          <a className="footer__nav-link" href="#">Careers</a>
            </li>
          <li className="footer__nav-item">
          <a className="footer__nav-link" href="#">Brand Guide</a>
            </li>
        </ul>
      </div>
      <div className="footer__social">
        <h3 className="footer__social-subtitle">Our social media:</h3>
        <ul className="footer__social-items">
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-icon" src={socialLogo1} alt="Иконка социально сети"/>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-icon" src={socialLogo2} alt="Иконка социально сети"/>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-icon" src={socialLogo3} alt="Иконка социально сети"/>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-icon" src={socialLogo4} alt="Иконка социально сети"/>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-icon" src={socialLogo5} alt="Иконка социально сети"/>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-icon" src={socialLogo6} alt="Иконка социально сети"/>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-icon" src={socialLogo7} alt="Иконка социально сети"/>
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-icon" src={socialLogo8} alt="Иконка социально сети"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
