import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <div className="tims-logo">
                <img src="timslogo.png" alt="industrial scale lifting objects with the letters T.I.M.S beside it."></img>
            </div>
            <h1 className="navbar-title">Thomas6Labs</h1>
            <div className="mobile-menu">
                <img src="mobileMenu.png" alt="three horizonal bars representing a menu"></img>
            </div>
        </div>
    );
};

export default Navbar;