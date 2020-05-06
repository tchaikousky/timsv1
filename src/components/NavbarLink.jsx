import React from 'react';
import { Link } from 'react-router-dom';

function NavbarLink(props) {
    const link = props.link;
    const text = props.text;

    return (
        <div >
            <Link to={link} className="navbar-link"><h2>{text}</h2></Link>
        </div>
    )
}

export default NavbarLink;