import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { Route, Switch } from "react-router";
import '../css/style.css';
import Contact from '../ContactComponent/Contact';
import Concerts from '../ConcertComponent/Concerts';
import Home from "../Home/HomeComponent";
import User from "../UserComponent/User";
import Connexion from "../ConnexionComponent/Connexion";
import LOGOconcert from "../css/img/LOGOconcert.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Concert from "../ConcertComponent/Concert";

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
                                <Link to='/concerts'>Concerts</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/login'>Connexion</Link>
                            </li>
                        </div>
                        <div className='menu-profile'>
                            <li>
                                <Link to='/users'><AccountCircleIcon /></Link>
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

                        <Route path='/login'>
                            <Connexion />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path='/concerts'>
                            <Concerts />
                        </Route>
                        <Route path='/users'>
                            <User />
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