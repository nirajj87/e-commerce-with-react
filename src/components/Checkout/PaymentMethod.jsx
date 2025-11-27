import React from "react";

export default function PaymentMethod({ form, onChange, onPrev, onNext }) {
  return (
    <div className="card p-4 mb-3">
      <h5 className="mb-3">Choose Payment Method</h5>

      <div className="mb-3">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="paymentMode" id="pm_card" value="card" checked={form.paymentMode==='card'} onChange={onChange}/>
          <label className="form-check-label" htmlFor="pm_card">Card</label>
        </div>

        <div className="form-check mt-2">
          <input className="form-check-input" type="radio" name="paymentMode" id="pm_upi" value="upi" checked={form.paymentMode==='upi'} onChange={onChange}/>
          <label className="form-check-label" htmlFor="pm_upi">UPI</label>
        </div>

        <div className="form-check mt-2">
          <input className="form-check-input" type="radio" name="paymentMode" id="pm_cod" value="cod" checked={form.paymentMode==='cod'} onChange={onChange}/>
          <label className="form-check-label" htmlFor="pm_cod">Cash on Delivery</label>
        </div>
      </div>

      <div className="d-flex">
        <button className="btn btn-outline-secondary" onClick={onPrev}>← Back</button>
        <button className="btn btn-success ms-auto" onClick={onNext} disabled={!form.paymentMode}>Proceed to Payment</button>
      </div>
    </div>
  );
}
