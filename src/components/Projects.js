import React from "react";

function Projects() {
  return (
    <section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Portfolio</h5>
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
            {/* /folio-item */}
            {/* <div className="bgrid folio-item">
              <div className="item-wrap">
                <img src="images/portfolio/clouds.jpg" alt="Clouds" />
                <a href="#modal-03" className="overlay">
                  <div className="folio-item-table">
                    <div className="folio-item-cell">
                      <h3 className="folio-title">Clouds</h3>
                      <span className="folio-types">Web Design</span>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
            {/* /folio-item */}
            {/* <div className="bgrid folio-item">
              <div className="item-wrap">
                <img src="images/portfolio/beetle.jpg" alt="Beetle" />
                <a href="#modal-04" className="overlay">
                  <div className="folio-item-table">
                    <div className="folio-item-cell">
                      <h3 className="folio-title">Beetle</h3>
                      <span className="folio-types">Branding</span>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
            {/* /folio-item */}
            {/* <div className="bgrid folio-item">
              <div className="item-wrap">
                <img src="images/portfolio/lighthouse.jpg" alt="Lighthouse" />
                <a href="#modal-05" className="overlay">
                  <div className="folio-item-table">
                    <div className="folio-item-cell">
                      <h3 className="folio-title">Lighthouse</h3>
                      <span className="folio-types">Web Development</span>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
            {/* /folio-item */}
            {/* <div className="bgrid folio-item">
              <div className="item-wrap">
                <img src="images/portfolio/salad.jpg" alt="Salad" />
                <a href="#modal-06" className="overlay">
                  <div className="folio-item-table">
                    <div className="folio-item-cell">
                      <h3 className="folio-title">Salad</h3>
                      <span className="folio-types">Branding</span>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
            {/* /folio-item */}
            {/* modal popups - begin
              ============================================================= */}
            {/* <div id="modal-01" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
              </div>
              <div className="description-box">
                <h4>Liberty</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <div className="categories">Web Development</div>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a href="#" className="popup-modal-dismiss">
                  Close
                </a>
              </div>
            </div> */}
            {/* /modal-01 */}

            {/* <div id="modal-02" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
              </div>
              <div className="description-box">
                <h4>Shutterbug</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <div className="categories">Web Design</div>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a href="#" className="popup-modal-dismiss">
                  Close
                </a>
              </div>
            </div> */}
            {/* /modal-02 */}
            {/* <div id="modal-03" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/portfolio/modals/m-clouds.jpg" alt="" />
              </div>
              <div className="description-box">
                <h4>Clouds</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <div className="categories">Web Design</div>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a href="#" className="popup-modal-dismiss">
                  Close
                </a>
              </div>
            </div> */}
            {/* /modal-03 */}
            {/* <div id="modal-04" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/portfolio/modals/m-beetle.jpg" alt="" />
              </div>
              <div className="description-box">
                <h4>Beetle</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <div className="categories">Branding</div>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a href="#" className="popup-modal-dismiss">
                  Close
                </a>
              </div>
            </div> */}
            {/* /modal-04 */}
            {/* <div id="modal-05" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
              </div>
              <div className="description-box">
                <h4>Lighthouse</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <div className="categories">Web Development</div>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a href="#" className="popup-modal-dismiss">
                  Close
                </a>
              </div>
            </div> */}
            {/* /modal-05 */}
            {/* <div id="modal-06" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/portfolio/modals/m-salad.jpg" alt="" />
              </div>
              <div className="description-box">
                <h4>Salad</h4>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <div className="categories">Branding</div>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a href="#" className="popup-modal-dismiss">
                  Close
                </a>
              </div>
            </div> */}
            {/* /modal-06 */}
            {/* modal popups - end
              ============================================================= */}
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
