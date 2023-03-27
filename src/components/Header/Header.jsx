import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div><img src={logo} alt="Ema jhon logo" /></div>
                <nav>
                    <ul>
                        <li><a href="./home">Order</a></li>
                        <li><a href="./review">Order Review</a></li>
                        <li><a href="./inventory">Manege Inventory</a></li>
                        <li><a href="./login">Login</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;