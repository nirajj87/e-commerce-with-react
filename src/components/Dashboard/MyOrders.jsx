import React from "react";
import "../../style/myorders.css"

export default function MyOrders() {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  return (
    <div className="orders-container container py-4">

      {/* HEADER */}
      <div className="orders-header mb-4">
        <h2 className="orders-title">📦 My Orders</h2>
        <p className="orders-subtitle">Your complete order history</p>
      </div>

      {/* No Orders */}
      {orders.length === 0 && (
        <div className="empty-card text-center">
          <h5>No Orders Found</h5>
          <p className="text-muted">You haven’t placed any orders yet.</p>
        </div>
      )}

      {/* ORDER LIST */}
      {orders.map((o) => (
        <div className="order-card mb-4" key={o.id}>
          {/* TOP ROW */}
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <div className="order-id">Order #{o.id}</div>
              <div className="order-date">{new Date(o.date).toLocaleString()}</div>
            </div>

            <div className="text-end">
              <div className="order-total">${o.total.toFixed(2)}</div>
              <span className="order-badge">{o.method}</span>
            </div>
          </div>

          {/* ITEMS LIST */}
          <div className="mt-3">
            {o.items.map((it) => (
              <div className="order-item d-flex justify-content-between" key={it.id}>
                <div>{it.title} × {it.quantity || 1}</div>
                <div className="item-price">
                  ${(it.price * (it.quantity || 1)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
