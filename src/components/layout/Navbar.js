import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
   <div>   
   <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-link">
                            <a class="nav-link active" aria-current="page"  href="/">
                                Home
                                </a>
                        </li>
                        <li class="nav-link">
                            <a class="nav-link" href="/about"> 
                             About
                             </a>

                        </li>
                        <li class="nav-link">
                            <a class="nav-link" href="/contact">
                                Contact
                            </a>
                        </li>
                        <li class="nav-link">   
                        </li>
                    </ul>
                </div>
            <Link className="btn btn-outline-light" to="/users/add">Add user</Link>   
            </div>
   </div>
        </nav>
    );
};

export default Navbar;
