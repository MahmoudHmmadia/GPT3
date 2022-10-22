import React from "react";
import logo from "../../assets/logo.svg";
function Footer() {
  return (
    <div className="footer section">
      <div className="container">
        <h1 className="footer__title">
          Do you want to step in to the future before others
        </h1>
        <div className="footer__reaquest-btn">Request Early Access</div>
        <div className="footer__containe">
          <div className="box">
            <img src={logo} alt="" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="box">
            <ul className="links">
              <li className="active">Links</li>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="box">
            <ul className="links">
              <li className="active">Company</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="box">
            <ul className="links">
              <li className="active">Get in touch</li>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
        <div className="finish">© 2021 GPT-3. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
