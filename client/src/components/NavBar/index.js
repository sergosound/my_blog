import React from 'react';

const NavBar = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="">sass</a></li>
                <li><a href="">sass <span className="new badge">4</span></a></li>
                <li><a href="">sass</a></li>
            </ul>
        </div>
    </nav>
);

export default NavBar;
