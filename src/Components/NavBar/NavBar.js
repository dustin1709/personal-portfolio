import { React, useState, useEffect } from "react";
import { FaIcons } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const [isNotHidden, setIsNotHidden] = useState(false);

    const openOptions = () => {
        if (isNotHidden == false) {
            setIsNotHidden(true);
        } else {
            setIsNotHidden(false);
        }
        // console.log("show navigation");
    };

    return (
        <div id="AllNavs">
            <nav className="navbar navbar-dark">
                <div className="container-fluid" id="NavigationBar">
                    <button className="navbar-toggler" type="button" onClick={openOptions}>
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                </div>
            </nav>
            <div id={ isNotHidden ? 'show' : 'hide'}>
                <div className="p-4 customized">
                    <NavLink to="/" activeclassname="active" className="nav-link text-dark">About</NavLink>
                    <div className="space"></div>
                    <NavLink to="/experience" activeclassname="active" className="nav-link text-dark">Experience</NavLink>
                    <div className="space"></div>
                    <NavLink to="/projects" activeclassname="active" className="nav-link text-dark">Projects</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar
