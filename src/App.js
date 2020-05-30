import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Welcome to BridgeLabz!</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About : BridgeLabz is a live Lab environment nurturing Fresh Engineers through Startups for Tech Companies at Zero Cost. ... BridgeLabz Mission is to fulfill the aspiration of fresh engineers to find jobs, tech companies to have qualified fresh talent, senior engineer to co-found startups & seasoned professionals to develop ideas.</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <address> 
            You can find us here : <br /> 
            BridgeLabz Solution<br /> 
            Malhotra Chambers, First Floor, Govandi East, Mumbai, Maharashtra 400088 
        </address> 
        Phone :070459 48949
    </div>
  );
}
