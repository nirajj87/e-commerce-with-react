import React from "react";
import AddToCart from "./AddToCart";
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
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>


                <form className="d-flex me-3">
                    <input className="form-control search-box" type="search" placeholder="Search products..." />
                </form>

                 <AddToCart />
               



                <a href="#" className="btn btn-primary px-4">Login</a>

            </div>
        </div>
    </nav >
    );
};
export default Header