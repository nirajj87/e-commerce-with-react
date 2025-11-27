import React from 'react'
import { useSelector } from "react-redux";
function AddToCart() {
    const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);
    return (
        <a href="#" className="text-decoration-none position-relative me-3">
            <i className="fas fa-shopping-cart fa-lg text-dark"></i>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.65rem", padding: "2px 6px" }}>
                {cartSelector.length ? cartSelector.length:0}
            </span>
        </a>
    )
}

export default AddToCart