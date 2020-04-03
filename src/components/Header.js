import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function Header() {
  useEffect(() => {
    console.log("component did mount");

    var toggleButton = $(".menu-toggle"),
      nav = $(".main-navigation");

    // toggle button
    toggleButton.on("click", function(e) {
      e.preventDefault();
      toggleButton.toggleClass("is-clicked");
      nav.slideToggle();
    });
  }, []);
  return (
    <header>
      <div className="row">
        <div className="top-bar">
          <a className="menu-toggle" href="#">
            <span>Menu</span>
          </a>

          <nav id="main-nav-wrap">
            <ul className="main-navigation">
              <li className="current">
                <a className="smoothscroll" href="#intro">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#downloadcv">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Portfolio
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* /top-bar */}
      </div>
      {/* /row */}
    </header>
  );
}

export default Header;
