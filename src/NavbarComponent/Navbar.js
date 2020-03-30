import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { Route, Switch } from "react-router";
import '../css/style.css';
import About from '../AboutComponent/About';
import Test from '../TestComponent/Test';

const NavBar = () => {
    return (
        <Router>
            <div>
                <ul className="navBar">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/:user">
                        <Test />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default NavBar;