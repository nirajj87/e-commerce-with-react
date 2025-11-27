import React, { useEffect } from "react";
import productImg from "../assets/images/bluetooth-yes-wireless-bluetooth-on-ear-headphones.jpeg"
import Image from "./Image";
import Button from "./Button";
import Title from "./Title";
import Price from "./Price";
import Rating from "./Rating";
import Description from "./ShortDescription";
import ClearAllButton  from "./Button";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsCard = () => {
    const dispach = useDispatch();
    useEffect(()=>{
        dispach(fetchProducts())
    },[])
   
    const productSelector = useSelector((state)=>state.products.items)
    console.log(productSelector);
    return (
    <div className="container mt-5">
        <div className="row">
            {
            productSelector.length > 0 &&
                productSelector.map((item,index) => (
                    <div className="col-md-2 mb-2" key={index}>
                        <div className="card shadow-lg border-0 product-card">

                            <Image url={item.thumbnail} alt={item.title} />

                            <div className="card-body">

                                <Title
                                    title={item.title}
                                    className="card-title fw-bold"
                                />

                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <Price
                                         price={`$ ${item.price}`} 

                                        className="text-success fw-bold fs-5"
                                    />

                                    <Rating
                                        className="text-success"
                                        rating={item.rating}
                                    />
                                </div>

                                <Description
                                    className="card-text text-muted"
                                    desc={item.description}
                                />

                                <div className="d-flex justify-content-between mt-3">
                                    
                                    <Button
                                        className="btn btn-primary w-50 me-2"
                                        icon="fas fa-cart-plus"
                                        label="Add to Cart"
                                        action="add"
                                        pyload={item}
                                    />

                                    <Button
                                        className="btn btn-outline-danger w-50"
                                        icon="fas fa-trash-alt"
                                        label="Remove"
                                        action="remove"
                                    />
                                </div>

                                <Button
                                    label="Clear All"
                                    action="clear"
                                    className="btn btn-warning w-100 mt-3"
                                    icon="fas fa-broom"
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);
}
export default ProductsCard