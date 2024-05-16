import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../images/background.jpg";
import img1 from "../animatedimgs/1.jpg";
import img2 from "../animatedimgs/2.jpg";
import img3 from "../animatedimgs/3.jpg";
import sliderimg from "../images/siteimgs/Picture1.jpg";
import sliderimg2 from "../images/siteimgs/Picture2.jpg";
import sliderimg3 from "../images/siteimgs/Picture3.jpg";
import sliderimg4 from "../images/siteimgs/Picture4.jpg";
import sliderimg5 from "../images/siteimgs/Picture5.jpg";
import sliderimg6 from "../images/siteimgs/Picture6.jpg";
import "./Home.css";
import Swiper from "swiper";
import Footers from "./Footers";
// import "swiper/swiper-bundle.css";

export default function Home() {
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

  return (
    <>
      <div>
        <div>
          <img className="bg-img" src={bg} alt="siddhraj paradise" />
        </div>
        <div className="h-heading"></div>

        <div className="welcome">
          <div className="welcome-content">
            <h1>Welcome to the VENTURE LLP experience</h1>
            <p>
              Corusview Venture LLP is a real estate firm dedicated to raising
              the bar for excellence in the sector. We take great pride in our
              constant dedication to quality, creativity, and client happiness.
              Our company was founded with the goal of transforming environments
              and elevating lifestyles. In every aspect of real estate
              development, Corusview Venture LLP is a reputable name that is
              synonymous with excellence, honesty, and integrity thanks to its
              team of seasoned professionals and extensive portfolio of
              successful projects.
            </p>
            <button>
              <Link to="/aboutus">View About US</Link>
            </button>
          </div>
          <div className="imgs">
            <div className="big-img">
              <img src={img1} alt="siddhraj paradise" />
            </div>
            <div className="small-imgs">
              <div style={{ marginBottom: "18px" }}>
                <img src={img2} alt="siddhraj paradise" />
              </div>
              <div>
                <img src={img3} alt="siddhraj paradise" />
              </div>
            </div>
          </div>
        </div>

        <div className="slider-container">
          {/* slider to be inserted */}
          <p className="slider-heading">Explore Our Venture</p>
          <div className="container">
            <div className="swiper swiperCarousel">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg}
                      alt="siddhraj sites in indore"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg2}
                      alt="siddhraj sites in indore"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg3}
                      alt="sites in indore"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg4}
                      alt="sites in indore"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg5}
                      alt="sites in indore"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="slider-img"
                      src={sliderimg6}
                      alt="sites in indore"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="gallery-btn">
            <Link
              to="/gallery"
              style={{ color: "black", textDecoration: "none" }}
            >
              View Gallery
            </Link>
          </button>
        </div>
        <div className="slider-mobile">
          <p className="slider-heading-mobile">Explore Our Venture</p>
          <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={sliderimg}
                  className="d-block w-100"
                  alt="corusview venture"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sliderimg2}
                  className="d-block w-100"
                  alt="corusview venture"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sliderimg3}
                  className="d-block w-100"
                  alt="corusview venture"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sliderimg4}
                  className="d-block w-100"
                  alt="corusview venture"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sliderimg5}
                  className="d-block w-100"
                  alt="corusview venture"
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
          <button
            type="button"
            className="gallery-btn"
            style={{ marginTop: "50px" }}
          >
            <Link
              to="/gallery"
              style={{ color: "black", textDecoration: "none" }}
            >
              View Gallery
            </Link>
          </button>
        </div>
        <div className="welcome">
          <div className="imgs">
            <div className="big-img">
              <img src={img1} alt="siddhraj paradise" />
            </div>
            <div className="small-imgs">
              <div style={{ marginBottom: "18px" }}>
                <img src={img2} alt="siddhraj paradise" />
              </div>
              <div>
                <img src={img3} alt="siddhraj paradise" />
              </div>
            </div>
          </div>
          <div className="testimonial-content">
            <p>
              <span>"</span>
              You and team went above and beyond! Thank y'all so much for the
              commitment to excellence- the results speak for themselves.
              <span>"</span>
            </p>

            <button>
              <Link to="/upcomming-projects">View Testimonial</Link>
            </button>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
}
