import React, { useEffect, useState } from "react";
import "./Footers.css";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

export default function Footers() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleClick = () => {
    setShowPlaceholder(false);
  };
  return (
    <>
      <div>
        <div className="footer">
          <div className="f-logo">
            <img src={logo} alt="corusviewventure" />
          </div>
          <div className="f-email-form">
            <p>JOIN OUR LIST</p>
            <form>
              <label>
                {showPlaceholder ? (
                  <input
                    type="email"
                    placeholder="Enter-Email"
                    onClick={handleClick}
                  />
                ) : (
                  <input type="email" />
                )}
              </label>
              <button type="submit">&#8594;</button>
            </form>
          </div>
          <div className="footer-contact-us">
            <p>CONTACT US </p>
            <p
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              <a
                href="tel:+919617244330"
                style={{ color: "white", textDecoration: "none" }}
              >
                +91 96172-44330
              </a>
            </p>
            <div className="f-social-logos">
              <a href="">
                <img src={facebook} />
              </a>
            </div>
            <div className="f-social-logos">
              <a
                href="https://www.instagram.com/corusviewventure?igsh=MXZvd2c1Z251Y2p6eg=="
                target="_blank"
              >
                <img src={instagram} />
              </a>
            </div>
            <div className="f-social-logos">
              <a href="">
                <img src={twitter} />
              </a>
            </div>
            <div className="f-social-logos">
              <a href="">
                <img src={youtube} style={{ width: "30px", height: "30px" }} />
              </a>
            </div>
          </div>
        </div>

        <div className="f-details">
          <div className="d-content">
            <p>Copyright 2023. All rights reserved Corusview Venture LLP</p>
            <p>Designed & Developed By CorusView</p>
            <p>Privacy Policy Terms of Use Apply </p>
          </div>
        </div>
      </div>
    </>
  );
}
