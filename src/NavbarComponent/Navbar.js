import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { Route, Switch } from "react-router";
import '../css/style.css';
import Contact from '../ContactComponent/Contact';
import Concert from '../ConcertComponent/Concert';
import Home from "../Home/HomeComponent";

const NavBar = () => {
    return (
        <Router>
            <div>
                <ul className="navBar">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/concert">Concert</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/concert">
                        <Concert />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default NavBar;