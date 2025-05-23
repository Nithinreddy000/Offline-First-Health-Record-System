import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/profile">My Profile</Link></li>
                <li><Link to="/records">Health Records</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
