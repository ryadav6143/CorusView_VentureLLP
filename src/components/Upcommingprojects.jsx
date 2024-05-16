import React from "react";
import { useEffect, useState } from "react";
import "./Upcommingprojects.css";
import upcommingimg from "../animatedimgs/4.jpg";
import vidoes from "../videos/sitevideo.mp4";
import Footers from "./Footers";
import Swiper from "swiper";
import sliderimg from "../images/siteimgs/Picture1.jpg";
import sliderimg2 from "../images/siteimgs/Picture2.jpg";
import sliderimg3 from "../images/siteimgs/Picture3.jpg";
import sliderimg4 from "../images/siteimgs/Picture4.jpg";
import sliderimg5 from "../images/siteimgs/Picture5.jpg";
import sliderimg6 from "../images/siteimgs/Picture6.jpg";
import Header from "./Header";
function Upcommingprojects() {
  // --------------------Google firebase setup----------------------

  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://venturellp-default-rtdb.firebaseio.com/Interested-Client.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (res) {
      setFormData({
        name: "",
        number: "",
      });
      alert("We have recieved Your data... reach out to you soon");
    }
  };

  // --------------------Google firebase setup----------------------
  //------------------- backend for slider-------------------------

  useEffect(() => {
    const swiper = new Swiper(".swiperCarousel", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      keyboard: {
        enabled: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const slides = document.getElementsByClassName("swiper-slide");
    for (const slide of slides) {
      slide.addEventListener("click", () => {
        const { className } = slide;
        if (className.includes("swiper-slide-next")) {
          swiper.slideNext();
        } else if (className.includes("swiper-slide-prev")) {
          swiper.slidePrev();
        }
      });
    }

    function resizeTextToFit() {
      const quoteEls = document.getElementsByClassName("quote");
      for (const el of quoteEls) {
        el.style.width = el.offsetWidth;
        el.style.height = el.offsetHeight;
      }
      window.textFit(quoteEls, { maxFontSize: 14 });
    }
    resizeTextToFit();
    window.addEventListener("resize", () => {
      resizeTextToFit();
    });

    return () => {
      window.removeEventListener("resize", () => {
        resizeTextToFit();
      });
    };
  }, []);
  // ------------------backend for slider-----------------------------
  return (
    <>
      <div>
        <div className="cover">
          <div className="cover-img">
            <img src={upcommingimg} alt="siddhraj sites" />
          </div>
          <div className="cover-heading">
            <p>
              Upcomming <br />
              <span>Projects</span>
            </p>
          </div>
        </div>

        <div className="upcomminc-corner">
          <div className="corner-container">
            <div className=" des-heading">
              <p>
                <span>Description</span> <br />
                of upcomming <br /> projects
              </p>
            </div>
            <div className="upcomming-detail">
              <p>
                Siddhraj Paradise, a prestigious residential closed colony
                nestled in the serene locale of Sinhasa, Indore, is a testament
                to luxurious and tranquil living. Located in close proximity to
                the Indore International Airport, this meticulously planned
                enclave offers a range of plots spanning from 1200 to 2800 sqft,
                providing ample space for your dream home.
              </p>
              <p>
                Designed with meticulous attention to detail, Siddhraj Paradise
                seamlessly blends modern aesthetics with the tranquility of its
                natural surroundings. Residents can expect a harmonious living
                experience, surrounded by well-manicured landscapes,
                state-of-the-art infrastructure, and a secure, gated community.
              </p>
              <p>
                Whether you aspire to build a cozy abode or a spacious family
                residence, Siddhraj Paradise caters to diverse preferences,
                ensuring that every plot becomes a canvas for your unique
                vision. Immerse yourself in the charm of a community that
                prioritizes comfort, security, and a wholesome lifestyle.
              </p>
              <p>
                Experience the epitome of residential bliss at Siddhraj
                Paradise, where each plot is not just a piece of land but an
                opportunity to craft the home of your dreams in one of Indore's
                most sought-after and convenient locations.
              </p>
            </div>
          </div>
        </div>

        <div className="upcomming-slider-container slider-container">
          <p className="upcomming-slider-heading">
            Site <i>Pictures</i>
          </p>
          <div className="upcomming-container">
            <div className="swiper swiperCarousel">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg}
                      alt="siddhraj sites"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg2}
                      alt="siddhraj sites"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg3}
                      alt="siddhraj sites"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg4}
                      alt="siddhraj sites in indore"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg5}
                      alt="siddhraj sites in indore"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg6}
                      alt="siddhraj sites in indore"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div> */}
            </div>
          </div>
        </div>
        <div className="slider-mobile">
          <p className="slider-heading-mobile">Site Pictures</p>
          <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={sliderimg}
                  className="d-block w-100"
                  alt="siddhraj sites in indore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sliderimg2}
                  className="d-block w-100"
                  alt="siddhraj sites in indore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sliderimg3}
                  className="d-block w-100"
                  alt="siddhraj sites in indore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sliderimg4}
                  className="d-block w-100"
                  alt="siddhraj sites in indore"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sliderimg5}
                  className="d-block w-100"
                  alt="siddhraj sites in indore"
                />
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
        </div>
        <div className="notcommint-img" style={{ border: "0" }}>
          <div className="u-imgs">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6190.03748357249!2d75.77870815233712!3d22.70524867379953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQyJzE3LjIiTiA3NcKwNDYnNTIuMyJF!5e0!3m2!1sen!2sin!4v1701845983040!5m2!1sen!2sin"
              // width="500"
              // height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="u-video" style={{ border: "0" }}>
            <video
              id="u-video"
              src={vidoes}
              style={{ border: "0" }}
              autoPlay
              muted
              loop
              controls="true"
            ></video>
          </div>
        </div>

        <div className="upcomming-form">
          <div className="upcomming-contact-form">
            <form method="post" onSubmit={handleSubmit}>
              <h1 style={{ fontStyle: "italic" }}>Get Quote</h1>
              <label>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  type="tel"
                  placeholder="Number"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <button type="submit" id="sent-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Upcommingprojects;
