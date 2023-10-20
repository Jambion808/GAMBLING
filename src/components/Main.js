/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";


import slotLogo1 from '../images/Group1.svg';
import slotLogo2 from "../images/Group2.svg";
import slotLogo3 from "../images/Group3.svg";
import slotLogo4 from "../images/Group4.svg";
import slotLogo5 from "../images/Group5.svg";
import slotLogo6 from "../images/Group6.svg";
import slotLogo7 from "../images/Group7.svg";
import slotLogo8 from "../images/Group8.svg";
import slotLogo9 from "../images/Group9.svg";
import slotLogo10 from "../images/Group10.svg";
import slotLogo11 from "../images/Group11.svg";
import slotLogo12 from "../images/Group12.svg";
import slotLogo13 from "../images/Group13.svg";
import slotLogo14 from "../images/Group14.svg";
import slotHoriz1 from "../images/longbottom.svg";
import slotHoriz2 from "../images/longCenter.svg";


function Main() {


  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => { 
    const handleScroll = () => {
      const scrollBlog = document.querySelector('.content__blog-container');
      const scrollItems = document.querySelector('.content__blog-items');
      const height = scrollItems.getBoundingClientRect().height;
      const scrollTop = scrollItems.scrollTop;
      const scrollHeight = scrollItems.scrollHeight;
      const newScrollPos = (scrollTop / (scrollHeight - height)) * 100;
      scrollBlog.style.setProperty('--scrollPos', `${newScrollPos}%`);
    };

    const scrollItems = document.querySelector('.content__blog-items');
    scrollItems.addEventListener('scroll', handleScroll, true);

    return () => {
      scrollItems.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <main className="content">
      <div className="content__container">
        <div className="content__info">
          <h1 className="content__title">HOUSE OF
            <span> GAMBLING</span>
          </h1>
          <p className="content__text">Raise your ROI with direct advertiser</p>
          <div className="content__link-box">
            <a className="content__link" href="#">BECOME A PARTNER</a>
          </div>
        </div>

        {/*  */}
        <div className="content__slot">
          <div className="content__slot-list content__slot-list-left">
            <img className="content__slot-logolong" src={slotLogo1} alt="слот" />
            <img className="content__slot-logohoriz" src={slotHoriz1} alt="слот"/> 
            <img className="content__slot-logo" src={slotLogo2} alt="слот" />
            <img className="content__slot-logo" src={slotLogo3} alt="слот" />
            <img className="content__slot-logo" src={slotLogo4} alt="слот" />
            <img className="content__slot-logolong" src={slotLogo1} alt="слот" />
            <img className="content__slot-logohoriz" src={slotHoriz2} alt="слот"/> 
            <img className="content__slot-logo" src={slotLogo2} alt="слот" />
            <img className="content__slot-logo" src={slotLogo3} alt="слот" />
            <img className="content__slot-logo" src={slotLogo4} alt="слот" />
          </div>
          <div className="content__slot-list content__slot-list-center">
            <img className="content__slot-logo" src={slotLogo5} alt="слот" />
            <img className="content__slot-logo" src={slotLogo6} alt="слот" />
            <img className="content__slot-logo" src={slotLogo7} alt="слот" />
            <img className="content__slot-logolong" src={slotLogo8} alt="слот" />
            <img className="content__slot-logohoriz" src={slotHoriz2} alt="слот"/>
            <img className="content__slot-logo" src={slotLogo5} alt="слот" />
            <img className="content__slot-logo" src={slotLogo6} alt="слот" />
            <img className="content__slot-logo" src={slotLogo7} alt="слот" />
            <img className="content__slot-logolong" src={slotLogo8} alt="слот" />
            <img className="content__slot-logohoriz" src={slotHoriz2} alt="слот"/>
          </div>
          <div className="content__slot-list content__slot-list-right">
            <img className="content__slot-logo" src={slotLogo9} alt="слот" />
            <img className="content__slot-logohoriz" src={slotHoriz1} alt="слот"/>
            <img className="content__slot-logo" src={slotLogo10} alt="слот" />
            <img className="content__slot-logo" src={slotLogo11} alt="слот" />
            <img className="content__slot-logo" src={slotLogo12} alt="слот" />
            <img className="content__slot-logo" src={slotLogo13} alt="слот" />
            <img className="content__slot-logo" src={slotLogo14} alt="слот" />
            <img className="content__slot-logo" src={slotLogo10} alt="слот" />
            <img className="content__slot-logohoriz" src={slotHoriz1} alt="слот"/>
            <img className="content__slot-logo" src={slotLogo11} alt="слот" />
            <img className="content__slot-logo" src={slotLogo12} alt="слот" />
            <img className="content__slot-logo" src={slotLogo13} alt="слот" />
            <img className="content__slot-logo" src={slotLogo14} alt="слот" />
          </div>
        </div>

        <div className="content__blog">
          <h2 className="content__blog-title">BLOG</h2>

          <div className="content__blog-container">
            <div className="scrollbar">
              <div className="scrollbar__track">
                <div className="scrollbar__button"></div>
              </div>
            </div>
            <div className="content__blog-items">

              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
              <div className="content__blog-item">
                <a className="content__blog-link" href="https://github.com/Jambion808">
                  <h3 className="content__blog-text">Payment methods: Skrill, Neteller, webmoney, Bank transfer</h3>
                  <p className="content__blog-time">10.02.2023</p>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <span className="dot__gradient-left"></span>
      <span className="dot__gradient-right"></span>
      <span className="dot__gradient-content"></span>
    </main>
  );
}

export default Main;
