import React from 'react';
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
                    <a href = ''><li>ABOUT</li></a>
                    <a href = ''><li>CONTACT</li></a>
                    <Link to = '/cart'>
                    <a href=""><li><img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Cart Icon" /></li></a>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
