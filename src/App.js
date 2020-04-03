import React from "react";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Portfolio} />
    </Router>
  );
}

export default App;
