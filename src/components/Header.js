import React from "react";
import "../styles/Header.css"

function Header() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Joseph Rhines</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
           
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
               
                    <li class="nav-item">
                        <a class="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">About</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    );

}
    

    export default Header;