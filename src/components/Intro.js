import React from "react";
function Intro() {
  return (
    <section id="intro">
      <div className="intro-overlay" />
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Hello, World.</h5>
            <h1>I'm Prabhav Rajeev.</h1>
            <p className="intro-position">
              <span>Full Stack Developer</span>
              <span>Competetive Programmer</span>
            </p>
            <a className="button stroke smoothscroll" href="#about">
              More About Me
            </a>
          </div>
        </div>
      </div>
      {/* /intro-content */}
      <ul className="intro-social">
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/prabhav-rajeev/">
            <i className="fa fa-linkedin" />
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Prabhav-R">
            <i className="fa fa-github" />
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact">
            <i className="fa fa-google" />
          </a>
        </li>
      </ul>
      {/* /intro-social */}
    </section>
  );
}

export default Intro;
