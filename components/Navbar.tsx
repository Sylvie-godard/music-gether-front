import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Link from "next/link";

const NavBar: React.FC<{}> = () => {
    return (
        <div>
            <ul className='navBar'>
                <div>
                    <img className='logo' src="/img/LOGOconcert.png" alt=''/>
                </div>
                <div className='menu'>
                    <li>
                        <Link href='/'>
                            <a>Accueil</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/concerts'}>
                            <a>Concerts</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/login'}>
                            <a>Connexion</a>
                        </Link>
                    </li>
                </div>
                <div className='menu-profile'>
                    <li>
                        <Link href={'/profile'}>
                            <a><AccountCircleIcon/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/concert'}>
                            <a><PowerSettingsNewIcon/></a>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default NavBar;