import React from "react";
import "./Aboutus.css";
import slider1 from "../animatedimgs/2.jpg";
import slider2 from "../animatedimgs/3.jpg";
import slider3 from "../animatedimgs/4.jpg";
import img1 from "../images/home1.jpg";
import img2 from "../images/home2.jpg";
import img3 from "../images/home3.jpg";
import Footers from "../components/Footers";

function Aboutus() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slider2}
              className="d-block w-100"
              alt="siddhraj paradise"
            />
            <div className="blur-div">
              <p>
                About <br /> Us
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider1}
              className="d-block w-100"
              alt="siddhraj paradise"
            />
            <div className="blur-div">
              <p>
                About <br /> Us
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100"
              alt="siddhraj paradise"
            />
            <div className="blur-div">
              <p>
                About <br /> Us
              </p>
            </div>
          </div>
        </div>
        <div className="slider-buttons">
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="abt-nav-2">
        <a href="#aboutus">About US</a>
        <a href="#llp-missions">Mission</a>
        <a href="#llp-vision">Vision</a>
        {/* <a href="">Resources </a> */}
      </div>
      <div className="about-us" id="aboutus">
        <div className="content">
          <p>
            About <br /> Corusview <br /> Venture LLP
          </p>
          <p>
            Corusview Venture LLP is a real estate firm dedicated to raising the
            bar for excellence in the sector. We take great pride in our
            constant dedication to quality, creativity, and client happiness.
            Our company was founded with the goal of transforming environments
            and elevating lifestyles. In every aspect of real estate
            development, Corusview Venture LLP is a reputable name that is
            synonymous with excellence, honesty, and integrity thanks to its
            team of seasoned professionals and extensive portfolio of successful
            projects.
          </p>
        </div>
        <div className="imgs">
          <div className="big-img">
            <img src={img1} alt="corusview venture" />
          </div>
          <div className="small-imgs">
            <div style={{ marginBottom: "18px" }}>
              <img src={img2} alt="corusview venture" />
            </div>
            <div>
              <img src={img3} alt="corusview venture" />
            </div>
          </div>
        </div>
      </div>
      <div className="llp-mission" id="llp-missions">
        <div className="mission-description">
          At Corusview Venture LLP, our goal is to constantly surpass our
          clients' expectations by providing outstanding real estate solutions.
          Driven by the values of honesty, competence, and customer-first
          mentality, we are committed to generating value for all of the people
          we serve. Our intentions are to maintain moral corporate conduct,
          build long-lasting connections, and make a significant impact on the
          communities we serve. Our mission is to be known as a trendsetter in
          the real estate industry, turning aspirations into reality one project
          at a time, by means of an uncompromising pursuit of excellence.
        </div>
        <div className="mission-heading">
          <p>
            Our <br />
            <i>
              <b>Mission</b>
            </i>
          </p>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      <div className="llp-vision" id="llp-vision">
        <div className="vision-heading">
          <p>
            Our <br />
            <i>
              <b>Vision</b>
            </i>
          </p>
        </div>
        <div className="vision-description">
          At Corusview Venture LLP, we strive to create living experiences that
          are in line with our clients' dreams in addition to developing
          structures. Our vision is to lead the way in innovative architectural
          and design practises, establishing thriving and sustainable
          communities that foster a sense of community. Our vision is to create
          a lasting impact on the urban landscape, redefine the future of real
          estate, and set new standards for unmatched excellence by utilising
          innovation and adapting to changing market conditions.
        </div>
      </div>
      {/* <div className="faq-section">
        <p className="faq-heading">
          Helpful<br />
        <b><i>resources</i></b>
           
          <br /> <span>FAQ's</span>
        </p>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
        <details>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, velit.
          </summary>
          <p>
            <p id="faq-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi voluptatum consequuntur consequatur quia? Quaerat,
              debitis, ducimus suscipit ipsum at illum, expedita iure pariatur
              harum ipsam fugit. Fugit, soluta ipsum.
            </p>
          </p>
        </details>
      </div> */}
      <Footers />
    </>
  );
}

export default Aboutus;
