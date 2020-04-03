import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contact</h5>
          <h1>I'd Love To Hear From You.</h1>
          {/* <p className="lead">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat
            adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p> */}
        </div>
      </div>
      {/* /section-intro */}

      {/* /contact-form */}
      <div className="row contact-info">
        {/* <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin" />
          </div>
          <h5>Where to find me</h5>
          <p>
            1600 Amphitheatre Parkway
            <br />
            Mountain View, CA
            <br />
            94043 US
          </p>
        </div> */}
        <div className="tab-full collapse">
          <div className="icon">
            <i className="icon-mail" />
          </div>
          <h5>Email Me At</h5>
          <p>prabhavrajeev.51@gmail.com</p>
        </div>
        {/* <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone" />
          </div>
          <h5>Call Me At</h5>
          <p>
            Phone: (+63) 555 1212
            <br />
            Mobile: (+63) 555 0100
            <br />
            Fax: (+63) 555 0101
          </p>
        </div> */}
      </div>
      {/* /contact-info */}
    </section>
  );
}

export default Contact;
