import React from "react";
import "../styles/Header.css";
import {Link} from 'react-router-dom'
function Header() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Joseph Rhines</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
               
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    );

}
    

    export default Header;