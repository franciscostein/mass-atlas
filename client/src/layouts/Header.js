import React from 'react';

import './Header.css';
import logo from '../static/mass-atlas-logo-side.png';

const Header = props => {
    return (
        <nav className="navbar shadow p-2 mb-5">
            <div className="navbar-brand">
                <img src={logo} height="50" alt="Mass Atlas logo" />
            </div>
        </nav>
    );
}

export default Header;