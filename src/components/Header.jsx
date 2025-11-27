import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
const Header = () => {
    return (
    
       
    <nav className = "navbar navbar-expand-lg navbar-custom" >
        <div className="container">
            <a className="navbar-brand" href="#">MyShop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span><i className="fas fa-bars"></i></span>
            </button>


            <div className="collapse navbar-collapse" id="mainNav">

                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to={"/about-us"} className="nav-link">About Us</Link></li>
                    <li className="nav-item"><Link to={"/contact-us"} className="nav-link">Contact</Link></li>
                </ul>


                

                 <AddToCart />
               



                {/* <a href="#" className="btn btn-primary px-4">Login</a> */}

            </div>
        </div>
    </nav >
    );
};
export default Header