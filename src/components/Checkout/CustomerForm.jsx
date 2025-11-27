import React from "react";

export default function CustomerForm({ form, onChange, onNext }) {
  return (
    <div className="card p-4 mb-3">
      <h5 className="mb-3">Customer Details</h5>

      <div className="mb-2">
        <input name="name" value={form.name} onChange={onChange} className="form-control" placeholder="Full name" />
      </div>

      <div className="mb-2">
        <input name="email" value={form.email} onChange={onChange} className="form-control" placeholder="Email" />
      </div>

      <div className="mb-2">
        <input name="phone" value={form.phone} onChange={onChange} className="form-control" placeholder="Phone" />
      </div>

      <div className="mb-3">
        <textarea name="address" value={form.address} onChange={onChange} className="form-control" placeholder="Shipping address" rows="3" />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary" onClick={() => window.history.back()}>Cancel</button>
        <button className="btn btn-primary ms-auto" onClick={onNext} disabled={!form.name || !form.email || !form.phone || !form.address}>Continue</button>
      </div>
    </div>
  );
}
