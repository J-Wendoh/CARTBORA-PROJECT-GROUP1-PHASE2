import React from 'react';
import Contact from "../pages/Contact"
import AboutUs from '../pages/About';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <h1><img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Cart Icon" />BORA</h1>
            </div>
            <div className="header-right">
                <ul>
                    <Link to = '/'><li>HOME</li></Link>
                    <Link to = '/contact'><li>CONTACT US</li></Link>
                    <Link to = '/about'><li>ABOUT</li></Link>
                    <Link to = '/cart'>
                    <a href=""><li><img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Cart Icon" /></li></a>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
