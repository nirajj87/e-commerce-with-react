import React, { useEffect, useState } from "react";
import Image from "./Image";
import Button from "./Button";
import Title from "./Title";
import Price from "./Price";
import Rating from "./Rating";
import Description from "./ShortDescription";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsCard = () => {
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filters
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const flyToCart = (imgUrl) => {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.className = "fly-img";
    document.body.appendChild(img);

    const cartIcon = document.querySelector("#cartIcon").getBoundingClientRect();

    img.style.left = "50%";
    img.style.top = "50%";

    setTimeout(() => {
      img.style.left = cartIcon.left + "px";
      img.style.top = cartIcon.top + "px";
      img.style.width = "20px";
      img.style.height = "20px";
    }, 100);

    setTimeout(() => img.remove(), 900);
  };

  // Filtered products
  const filteredProducts = productSelector.filter((item) => {
    const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = item.rating >= ratingFilter;
    const matchesStock = inStockOnly ? item.stock > 0 : true;

    return matchesCategory && matchesPrice && matchesSearch && matchesRating && matchesStock;
  });

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* FILTER SIDEBAR */}
        <div className="col-md-3 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Filters</h5>

            {/* Search */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Category */}
            <select
              className="form-select mb-3"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {Array.from(new Set(productSelector.map(p => p.category))).map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Price Range */}
            <label className="form-label">Price Range: {priceRange[0]} - {priceRange[1]}</label>
            <input
              type="range"
              className="form-range mb-3"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            />

            {/* Rating */}
            <label className="form-label">Min Rating: {ratingFilter}</label>
            <input
              type="range"
              className="form-range mb-3"
              min="0"
              max="5"
              step="0.1"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(Number(e.target.value))}
            />

            {/* In Stock */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={inStockOnly}
                id="inStockOnly"
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="inStockOnly">
                In Stock Only
              </label>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <div className="col-md-3 mb-3 d-flex" key={index}>
                  <div className="card shadow-lg border-0 product-card h-100">
                    <div style={{ position: "relative" }}>
                      <Image url={item.thumbnail} alt={item.title} />

                      {/* Wishlist */}
                      <button
                        className={`wishlist-btn ${wishlist.includes(item.id) ? "active" : ""}`}
                        onClick={() => toggleWishlist(item.id)}
                      >
                        <i className="fas fa-heart"></i>
                      </button>

                      {/* Quick View */}
                      <button
                        className="quick-view-btn"
                        onClick={() => setSelectedProduct(item)}
                      >
                        Quick View
                      </button>
                    </div>

                    <div className="card-body d-flex flex-column">
                      <Title title={item.title} className="card-title fw-bold" />

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Price price={`$ ${item.price}`} className="text-success fw-bold fs-5" />
                        <Rating className="text-success" rating={item.rating} />
                      </div>

                      <Description className="card-text text-muted" desc={item.description} />

                      <div className="mt-auto">
                        <Button
                          className="btn btn-primary w-100"
                          icon="fas fa-cart-plus"
                          label="Add to Cart"
                          action="add"
                          pyload={item}
                          onClick={() => flyToCart(item.thumbnail)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center text-muted">No products found.</div>
            )}
          </div>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="custom-modal-backdrop active" onClick={() => setSelectedProduct(null)}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedProduct(null)}>✕</button>

            <img
              src={selectedProduct.thumbnail}
              className="modal-img"
              alt={selectedProduct.title}
            />

            <h3 className="modal-title">{selectedProduct.title}</h3>
            <p className="modal-desc">{selectedProduct.description}</p>
            <div className="modal-price">$ {selectedProduct.price}</div>

            <button className="btn btn-primary w-100 mt-3">
              <i className="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
