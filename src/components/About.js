import React from "react";

function About() {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div className="intro-info">
            <img src="images/mypic.jpg" alt="Profile" />
            <p className="lead">
              I'm a person who enjoys automating boring day to day stuff with
              code, solving challenging problems(also writing code), and
              learning new ways make a pc do most of my work.
            </p>
          </div>
        </div>
      </div>
      {/* /section-intro */}
      <div className="row about-content">
        <div className="col-six tab-full">
          {/* <h3>Profile</h3>
          <p>
            Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse
            in magna sint minim officia consectetur nisi commodo ea magna
            pariatur nisi cillum.
          </p> */}
          <ul className="info-list">
            <li>
              <strong>Fullname:</strong>
              <span>Prabhav Rajeev</span>
            </li>
            <li>
              <strong>Birth Date:</strong>
              <span>May 19, 1999</span>
            </li>
            <li>
              <strong>Student At:</strong>
              <span>Government Engineering College Thrissur</span>
            </li>

            <li>
              <strong>Email:</strong>
              <span>prabhavrajeev.51@gmail.com</span>
            </li>
          </ul>
          {/* /info-list */}
        </div>
        <div className="col-six tab-full">
          <h3>Skills</h3>
          {/* <p>
            Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse
            in magna sint minim officia consectetur nisi commodo ea magna
            pariatur nisi cillum.
          </p> */}
          <ul className="skill-bars">
            <li>
              <div className="progress percent90">
                <span>90%</span>
              </div>
              <strong>Javascript</strong>
            </li>
            <li>
              <div className="progress percent85">
                <span>85%</span>
              </div>
              <strong>React</strong>
            </li>
            <li>
              <div className="progress percent70">
                <span>70%</span>
              </div>
              <strong>cpp</strong>
            </li>
            <li>
              <div className="progress percent95">
                <span>95%</span>
              </div>
              <strong>Algorithms,Data Structures</strong>
            </li>
            <li>
              <div className="progress percent75">
                <span>75%</span>
              </div>
              <strong>python</strong>
            </li>
          </ul>
          {/* /skill-bars */}
        </div>
      </div>
      <div className="row button-section">
        <div className="col-twelve">
          <a
            className="button stroke smoothscroll"
            title="Hire Me"
            href="#contact"
          >
            Hire Me
          </a>
          {/* <a
            href="https://www.linkedin.com/in/prabhav-rajeev/"
            target="_blank"
            rel="noopener noreferrer"
            title="Hire Me"
            className="button stroke smoothscroll"
          >
            Hire Me
          </a> */}
          {/* <a
            id="downloadcv"
            href="#"
            title="Download CV"
            className="button button-primary"
          >
            Download CV
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default About;
