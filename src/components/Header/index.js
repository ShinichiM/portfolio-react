import React, { useState } from "react";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";

export const Header = () => {
  const [hamburger, setHamburger] = useState("inactive");

  const mobileMenu = () => {
    if (hamburger === "active") {
      setHamburger("inactive");
    } else {
      setHamburger("active");
    }
  };

  return (
    <div className="header-container">
      <nav className="header-sub-container lg-screen">
        <div>
          <Link
            className="transition-a font-size-scale text-format"
            to="/"
            style={{ color: "#FFFFFF" }}
          >
            SM
          </Link>
        </div>
        <ul className="header-list justify-space-between">
          <li>
            <Link className="transition-a" to="/about-me">
              About me{" "}
            </Link>
          </li>
          <li>
            <Link className="transition-a" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="transition-a" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="transition-a" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
        <Footer />
      </nav>
      {/* --------------------- mobile ----------------------  */}
      <nav className="navbar mobile">
        <div className="nav-container">
          <div>
            <Link
              className="transition-a font-size-scale text-format"
              to="/"
              style={{ color: "#FFFFFF" }}
            >
              SM
            </Link>
          </div>
          <div className={`hamburger ${hamburger}`} onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <ul
          className={`sidebar-menu slide-${hamburger}`}
          style={{ color: "#fff", marginRight: "auto", marginLeft: "auto" }}
        >
          <div className='mobile-expanded'>
            {/* <div></div> */}
            <div className={`hamburger ${hamburger} mr-3 mt-3`} onClick={mobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
          </div>
          <li>
            <Link className="transition-a" to="/about-me" onClick={mobileMenu}>
              About me
            </Link>
          </li>
          <li>
            <Link className="transition-a" to="/portfolio" onClick={mobileMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="transition-a" to="/contact" onClick={mobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="transition-a" to="/resume" onClick={mobileMenu}>
              Resume
            </Link>
          </li>
          <Footer />
        </ul>

      </nav>
    </div>
  );
};
