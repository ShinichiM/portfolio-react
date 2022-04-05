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
        <ul className="header-list justify-space-between mobile">
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
      <nav className="navbar mobile" >
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
        <ul
          className={`sidebar-menu slide-${hamburger}`}
          style={{ color: "#fff", marginRight: "auto", marginLeft: "auto" }}
        >
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
      </nav>
    </div>
  );
};
