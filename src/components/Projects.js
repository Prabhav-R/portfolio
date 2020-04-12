import React from "react";

function Projects() {
  return (
    <section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          {/* <h5>Portfolio</h5> */}
          <h1>Check Out Some of My Works.</h1>
          <p className="lead">"What I cannot create, I do not understand."</p>
        </div>
      </div>
      {/* /section-intro*/}
      <div className="row portfolio-content">
        <div className="col-twelve">
          {/* portfolio-wrapper */}
          <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
            <div className="bgrid folio-item">
              <div className="item-wrap">
                <img src="images/portfolio/zigzag.jpg" alt="Liberty" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Prabhav-R/ZigZag-Clone"
                  className="overlay"
                >
                  <div className="folio-item-table">
                    <div className="folio-item-cell">
                      <h3 className="folio-title">ZigZag Clone</h3>
                      <span className="folio-types">
                        Clone of ZIgZag Android game made with unity
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* /folio-item */}
            <div className="bgrid folio-item">
              <div className="item-wrap">
                <img src="images/portfolio/admin.jpg" alt="Shutterbug" />
                <a
                  href="https://github.com/Prabhav-R/dyuthierp"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="overlay"
                >
                  <div className="folio-item-table">
                    <div className="folio-item-cell">
                      <h3 className="folio-title">Events Admin Panel</h3>
                      <span className="folio-types">
                        An online dashboard for managing college techfest events
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* /portfolio-wrapper */}
        </div>
        {/* /twelve */}
      </div>
      {/* /portfolio-content */}
    </section>
  );
}

export default Projects;
