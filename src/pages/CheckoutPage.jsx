import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slice";
import useLocalStorage from "../utils/useLocalStorage";
import CustomerForm from "../components/Checkout/CustomerForm";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import PaymentModal from "../components/Checkout/PaymentModal";
import Success from "../components/Checkout/Success";
import "../style/checkout.css";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart.items); // 🔥 Redux reactive cart
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMode: "",
  });

  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const [orders, setOrders] = useLocalStorage("orders", []);
  const [lastOrder, setLastOrder] = useState(null);

  const subtotal = cart.reduce((s, i) => s + i.price * (i.quantity || 1), 0);
  const tax = +(subtotal * 0.05).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onPaymentSuccess = (meta) => {
    const order = {
      id: "ORD" + Date.now(),
      date: new Date().toISOString(),
      items: cart,
      subtotal,
      tax,
      total,
      method: meta.method || form.paymentMode,
      customer: form,
    };

    const newOrders = [order, ...orders];
    setOrders(newOrders);
    setLastOrder(order);

    dispatch(clearCart()); // 🔥 Redux + Storage cleared correctly

    setShowModal(false);
    setStep(4);

    setTimeout(() => (window.location.hash = "/my-orders"), 1500);
  };

  return (
    <div className="checkout-container">
      {/* Progress Bar */}
      <div className="checkout-steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>Customer</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>Payment</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>Processing</div>
        <div className={`step ${step >= 4 ? "active" : ""}`}>Success</div>
      </div>

      <div className="row mt-4">
        {/* LEFT SIDE */}
        <div className="col-lg-7 fadeIn">
          {step === 1 && (
            <CustomerForm
              form={form}
              onChange={handleChange}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <PaymentMethod
              form={form}
              onChange={handleChange}
              onPrev={() => setStep(1)}
              onNext={() => setShowModal(true)}
            />
          )}

          {step === 4 && lastOrder && <Success order={lastOrder} />}
        </div>

        {/* RIGHT SIDE Summary */}
        <div className="col-lg-5 fadeIn">
          <div className="summary-card">
            <h5>Order Summary</h5>

            <div className="summary-row">
              <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Tax</span> <span>${tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="summary-row total">
              <span>Total</span> <span>${total.toFixed(2)}</span>
            </div>

            <button
              className="btn-pay"
              onClick={() => setShowModal(true)}
              disabled={!form.paymentMode}
            >
              {form.paymentMode ? "Pay Now" : "Select Payment Method"}
            </button>
          </div>
        </div>
      </div>

      <PaymentModal
        show={showModal}
        onClose={() => setShowModal(false)}
        amount={total}
        method={form.paymentMode}
        onSuccess={onPaymentSuccess}
      />
    </div>
  );
}
