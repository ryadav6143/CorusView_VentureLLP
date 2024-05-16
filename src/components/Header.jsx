import React, { useState } from "react";
import logo from ".././images/logo.png";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNav = () => {
    setIsNavCollapsed(true);
  };

  return (
    <>
      <div className="my-header">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ marginTop: "-16px" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} className="medi-logo" alt="corusview venture" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
              style={{ paddingLeft: "6px", paddingRight: "6px" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/aboutus"
                    className="nav-link active"
                    aria-current="page"
                    onClick={closeNav}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/upcomming-projects"
                    className="nav-link active"
                    aria-current="page"
                    onClick={closeNav}
                  >
                    UPCOMING PROJECTS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/nricorner" className="nav-link" onClick={closeNav}>
                    NRI CORNER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-link" onClick={closeNav}>
                    GALLERY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link" onClick={closeNav}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
