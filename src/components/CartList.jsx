import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/slice";
import { Link } from 'react-router-dom';

export default function CartList() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const manageQuantity = (id, value) => {
    const qty = Math.max(1, parseInt(value));
    dispatch(updateQuantity({ id, quantity: qty }));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const tax = +(subtotal * 0.05).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return (
    <div className="container cart-premium mt-4 mb-5">
      <h2 className="fw-bold mb-4 cart-title">Shopping Cart</h2>

      <div className="row g-4">
        {/* CART ITEMS */}
        <div className="col-lg-8">
          {cartItems.length === 0 && (
            <div className="empty-box text-center p-5">
              <h5>Your cart is empty</h5>
            </div>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-card d-flex align-items-center justify-content-between p-3 mb-3"
            >
              <div className="d-flex align-items-center gap-3">
                <img src={item.thumbnail} className="cart-img" alt="" />

                <div>
                  <h5 className="fw-semibold mb-1">{item.title}</h5>
                  <p className="text-muted mb-1 small">{item.brand}</p>

                  <p className="price-premium mb-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="99"
                  className="form-control qty-input"
                  value={item.quantity}
                  onChange={(e) =>
                    manageQuantity(item.id, e.target.value)
                  }
                />

                <button
                  className="btn btn-outline-danger btn-sm remove-premium"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="col-lg-4">
          <div className="summary-premium p-4">
            <h4 className="fw-semibold mb-3">Order Summary</h4>

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Tax (5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between summary-total mt-2 pt-2">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
            
            {
              
            cartItems.length > 0 ? 
           <Link className="btn checkout-premium w-100 mt-4" to="/checkout">
              Proceed to Checkout
            </Link>
            :
             <Link className="btn checkout-premium w-100 mt-4" to="/">
              Back to Home
            </Link>
          }
           
          </div>
        </div>
      </div>
    </div>
  );
}
