import React from "react";
import "./Gallary.css";
import gallaryimg from "../animatedimgs/2.jpg";
import imgs from "../images/home1.jpg";
import site1 from "../images/siteimgs/Picture1.jpg";
import site2 from "../images/siteimgs/Picture2.jpg";
import site3 from "../images/siteimgs/Picture3.jpg";
import site4 from "../images/siteimgs/Picture4.jpg";
import site5 from "../images/siteimgs/Picture5.jpg";
import site6 from "../images/siteimgs/Picture6.jpg";
import animated1 from "../animatedimgs/1.jpg";
import animated2 from "../animatedimgs/2.jpg";
import animated3 from "../animatedimgs/3.jpg";
import animated4 from "../animatedimgs/4.jpg";
import animated5 from "../animatedimgs/5.jpg";
import animated6 from "../animatedimgs/background.jpg";

import Footers from "./Footers";

export default function Gallary() {
  return (
    <>
      <div>
        <div className="cover">
          <div className="cover-img">
            <img src={gallaryimg} alt="" />
          </div>
          <div className="cover-heading">
            <p>Gallery</p>
          </div>
        </div>
      </div>
      <div className="gallery-img">
        <div className="g-imgs">
          {" "}
          <img src={site1} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={site2} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={site3} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={site4} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={site5} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={site6} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={animated1} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={animated2} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={animated3} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={animated4} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={animated5} />
        </div>
        <div className="g-imgs">
          {" "}
          <img src={animated6} />
        </div>
      </div>
      <Footers />
    </>
  );
}
