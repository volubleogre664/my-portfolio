import React from "react";
import Header from "./Header/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Contact from "./Contact/Contact.js";
import About from "./About/About.js";
import Projects from "./Projects/Projects.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
