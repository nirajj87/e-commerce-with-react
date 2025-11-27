import React, { useState, useEffect } from "react";

export default function PaymentModal({ show, onClose, amount, method, onSuccess }) {
  const [processing, setProcessing] = useState(false);

  useEffect(()=> {
    if (!show) setProcessing(false);
  }, [show]);

  if (!show) return null;

  const simulatePayment = async () => {
    setProcessing(true);
    // Small fake animation delay
    await new Promise((r)=>setTimeout(r, 900));
    setProcessing(false);
    onSuccess({ id: 'DEMO' + Date.now(), method, paidAt: new Date().toISOString() });
  };

  return (
    <div className="demo-modal-backdrop">
      <div className="demo-modal card p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="me-3 demo-brand">MyStore</div>
          <div className="fw-bold">Secure Checkout</div>
          <button className="btn-close ms-auto" onClick={onClose} />
        </div>

        <div className="p-3 demo-summary mb-3">
          <div className="d-flex justify-content-between"><div className="small text-muted">Amount</div><div className="fw-semibold">${amount.toFixed(2)}</div></div>
          <div className="d-flex justify-content-between"><div className="small text-muted">Method</div><div className="text-capitalize">{method}</div></div>
        </div>

        {method === 'card' && (
          <>
            <input className="form-control mb-2" placeholder="Card number (4242 4242 4242 4242)" />
            <div className="d-flex gap-2 mb-2">
              <input className="form-control" placeholder="MM/YY" />
              <input className="form-control" placeholder="CVC" />
            </div>
          </>
        )}

        {method === 'upi' && (
          <div className="mb-3">
            <input className="form-control" placeholder="Enter UPI ID (e.g. demo@upi)" />
            <div className="small text-muted mt-1">You will be redirected to a demo UPI flow.</div>
          </div>
        )}

        {method === 'cod' && (
          <div className="alert alert-success p-2">Cash on Delivery selected — order will be placed without online payment.</div>
        )}

        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary" onClick={onClose} disabled={processing}>Cancel</button>
          <button className="btn btn-primary ms-auto" onClick={simulatePayment} disabled={processing}>
            {processing ? 'Processing...' : (method === 'cod' ? 'Place Order (COD)' : 'Pay Securely')}
          </button>
        </div>

        <div className="mt-3 small text-muted text-center">Demo mode — no real money charged</div>
      </div>
    </div>
  );
}
