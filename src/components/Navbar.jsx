import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = props => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className={({isActive})=>`nav-link ${isActive && 'active'}`} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={({isActive})=>`nav-link ${isActive && 'active'}`} to="shopping-cart">Shopping Cart</NavLink>
                        </li>
                        <li className="nav-item btn btn-primary position-relative m-2">
                            items
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {props.count}
                            </span>
                        </li>
                    </ul>

                    <div className="d-flex">
                        items
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {props.count}
                        </span>
                    </div>
                
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;

