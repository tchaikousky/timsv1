import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomepageHero from './HomepageHero';
import DashboardMain from './DashboardMain';
import NavbarLink from './NavbarLink';

function Navbar(props) {
    let rightLink;
    let leftLink;

    function handleLogout() {
        props.action();
    }

    if(props.userid != null) {
        leftLink = <button type="button" className="navbar-button navbar-button-dashboard-link"><NavbarLink className ="navbar-button-dashboard-link" link="/dashboard" text="My Dashboard"></NavbarLink></button>
        rightLink = <button type="button" onClick={handleLogout} className="navbar-button"><NavbarLink link="/" text="Logout" logout={props.logout}></NavbarLink></button>
    } else {
        leftLink = <button type="button" className="navbar-button"><NavbarLink link="/login" text="Login" ></NavbarLink></button>
        rightLink = <button type="button" className="navbar-button"><NavbarLink link="/signup" text="Sign Up" ></NavbarLink></button>
    }

    // console.log(props.userid);

    return (
        <div className="navbar">
            <div className="tims-logo">
            <button type="button" className="navbar-button"><Link to="/"><img src="timslogo.png" alt="industrial scale lifting objects with the letters T.I.M.S beside it."></img></Link></button>
            </div>
            <h1 className="navbar-title">Thomas Inventory Management System (TIMS)</h1>
            <div className="mobile-menu">
                {leftLink}
                {rightLink}
                
            </div>
            
        </div>
        
    );
};

export default Navbar;