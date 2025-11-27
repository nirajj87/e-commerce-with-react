import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success({ order }) {
  const navigate = useNavigate();

  const [autoMode, setAutoMode] = useState(true);   // ✅ bot style: auto/manual
  const [countdown, setCountdown] = useState(3);

  const goToDashboard = () => navigate("/my-orders");

  // ⏳ Auto redirect system
  useEffect(() => {
    if (!autoMode) return;     // manual mode → no auto redirect

    if (countdown === 0) {
      navigate("/my-orders");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [autoMode, countdown, navigate]);

  return (
    <div className="card p-4 text-center">
      <div className="mb-3">
        <h3 className="text-success">✅ Payment Successful</h3>
        <div className="small text-muted">
          Order ID: <strong>{order.id}</strong>
        </div>
      </div>

      {/* BOT MODE SWITCH */}
      <div className="d-flex justify-content-center mb-3">
        <div className="btn-group">
          <button
            className={`btn ${autoMode ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => { setAutoMode(true); setCountdown(3); }}
          >
            Auto Redirect
          </button>

          <button
            className={`btn ${!autoMode ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setAutoMode(false)}
          >
            Manual Redirect
          </button>
        </div>
      </div>

      <div className="text-start mb-3">
        <div><strong>Date:</strong> {new Date(order.date).toLocaleString()}</div>
        <div><strong>Payment:</strong> {order.method}</div>
        <div className="mt-2"><strong>Total:</strong> ${order.total.toFixed(2)}</div>
      </div>

      {/* Manual button */}
      <button className="btn btn-dark" onClick={goToDashboard}>
        Go to Dashboard
      </button>

      {/* Auto redirect countdown */}
      {autoMode && (
        <div className="text-muted mt-2 small">
          Redirecting in {countdown} seconds...
        </div>
      )}
    </div>
  );
}
