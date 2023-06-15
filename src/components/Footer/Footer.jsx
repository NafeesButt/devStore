import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            An eCommerce website is an online platform that enables businesses
            to showcase and sell products or services to customers worldwide.
            With secure payment gateways, seamless browsing experiences, and
            convenient shopping carts, eCommerce websites provide a convenient
            and accessible way to shop from the comfort of your own home.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">We are available for your help</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0313 456 789 1</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: nafeesbutt234@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Smart Watches</span>
          <span className="text">Headphones</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Projectors</span>
          <span className="text">Home Theatre</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">Returns</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Contact Us</span>
          <span className="text">Terms & Conditions</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
