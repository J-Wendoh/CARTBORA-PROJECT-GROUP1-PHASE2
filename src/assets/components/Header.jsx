import React from 'react';
import { useState, useEffect } from 'react';
import Contact from "../pages/Contact"
import AboutUs from '../pages/About';
import { Link } from 'react-router-dom';
import { ShoppingCartSimple, Storefront} from '@phosphor-icons/react';


const Header = ({ cartItems }) => {
    const [cartCount, setCartCount] = useState(0);

    // Update cart count whenever cartItems change
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);
    return (
        <div className="header">
            <div className="header-left">
                <h1>
                <ShoppingCartSimple color='white' weight='duotone' size={40}/> CARTBORA
                </h1>
                {/* <h1><img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Cart Icon" />CARTBORA</h1> */}
            </div>
            <div className="header-right">
                <ul>
                    <Link to = '/'><li>HOME</li></Link>
                    <Link to = '/contact'><li>CONTACT US</li></Link>
                    <Link to = '/about'><li>ABOUT</li></Link>
                    <Link to = '/cart'>
                    <a href=""><li><ShoppingCartSimple size={30} />
                    {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}</li></a>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
