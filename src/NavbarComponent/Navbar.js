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
import LOGOconcert from "../css/img/LOGOconcert.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const NavBar = () => {
    return (
        <div>
            <Router>
                <div>
                    <ul className='navBar'>
                        <div>
                            <img className='logo' src={LOGOconcert} alt='' />
                        </div>
                        <div className='menu'>
                            <li>
                                <Link to='/'>Accueil</Link>
                            </li>
                            <li>
                                <Link to='/concert'>Concert</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </div>
                        <div className='menu-profile'>
                            <li>
                                <Link to='/'><AccountCircleIcon /></Link>
                            </li>
                            <li>
                                <Link to='/concert'><PowerSettingsNewIcon /></Link>
                            </li>
                        </div>
                    </ul>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>

                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path='/concert'>
                            <Concert />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default NavBar;