import React, { Component } from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import Projects from "./components/Projects";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Intro />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        <Loading />
      </React.Fragment>
    );
  }
}

export default Portfolio;
