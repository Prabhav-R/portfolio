import React, { useEffect } from "react";
import $ from "jquery";

function Header() {
  useEffect(() => {
    var toggleButton = $(".menu-toggle"),
      nav = $(".main-navigation");

    // toggle button
    toggleButton.on("click", function (e) {
      e.preventDefault();
      toggleButton.toggleClass("is-clicked");
      nav.slideToggle();
    });
  }, []);
  return (
    <header>
      <div className="row">
        <div className="top-bar">
          <a className="menu-toggle" href="/#">
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
                <a className="smoothscroll" href="#portfolio">
                  Projects
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
