import React from "react";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-six tab-full pull-right social">
          <ul className="footer-social">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/prabhav-rajeev/"
              >
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
        </div>
        <div className="col-eight tab-full">
          <div className="copyright" style={{ textAlign: "center" }}>
            <span>© Copyright {new Date().getFullYear()} </span>
          </div>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <i className="fa fa-long-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
