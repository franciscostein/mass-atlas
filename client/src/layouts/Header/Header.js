import React from 'react';

import logo from '../../static/mass-atlas-logo-side2.png';

const Header = props => {
    return (
        <nav className="navbar shadow-sm p-1 mb-5">
            <div className="navbar-brand">
                <img src={logo} height="50" alt="Mass Atlas logo" />
            </div>
        </nav>
    );
}

export default Header;