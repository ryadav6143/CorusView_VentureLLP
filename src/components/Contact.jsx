import React from "react";
import "./Contact.css";
import Footer from "../components/Footers";
import facebook from "../images/facebook-black.png";
import twitter from "../images/twitter-black.png";
import instagram from "../images/instagram-black.png";
import youtube from "../images/youtube-black.png";
import contactbg from "../animatedimgs/1.jpg";

export default function Contact() {
  return (
    <>
      {/* <div>
        <div>
          <img className="c-bgimg" src={contactbg} />
        </div>
        <div className="gallery-heading">
          <p>Contact</p>
        </div>
      </div> */}
      <div className="cover">
        <div className="cover-img">
          <img src={contactbg} alt="" />
        </div>
        <div className="cover-heading">
          <p>Contact</p>
        </div>
      </div>

      {/* -------------------- */}
      <div className="contact-venture-llp">
        <div>
          <p className="contact-venture-llp-heading">Write with us</p>
          <p id="corusview-email"> email@corusview.com &#8594; </p>
        </div>
        <div className="venture-number">
          <p className=" contact-venture-llp-heading">Talk with us</p>
          <p id="corusview-phone">
            <a
              href="tel:+919617244330"
              style={{ color: "black", textDecoration: "none" }}
            >
              +91 96172-44330
            </a>
          </p>
        </div>
      </div>
      {/* --------------------- */}
      <div className="social-logos">
        <p>Connect with us</p>
        <div className="logos">
          <a href="">
            <img src={facebook} />
          </a>
          <a
            href="https://www.instagram.com/corusviewventure?igsh=MXZvd2c1Z251Y2p6eg=="
            target="_blank"
          >
            <img src={instagram} />
          </a>
          <a href="">
            <img src={twitter} />
          </a>
          <a href="">
            <img id="youtube-logo-contact" src={youtube} />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
