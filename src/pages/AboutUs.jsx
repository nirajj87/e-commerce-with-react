import React from "react";

export default function AboutUs() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">About This Project</h2>

      <div className="card shadow-sm p-4">
        <p className="mb-3">
          This project is a fully responsive demo shopping cart application built
          to showcase modern React development practices. It simulates an
          e-commerce cart experience with smooth UI interactions and state
          management.
        </p>

        <h5 className="fw-bold mt-4">Technologies Used</h5>
        <ul className="mt-2">
          <li><strong>React</strong> (v18+) for building UI components</li>
          <li><strong>Redux Toolkit</strong> for global state management</li>
          <li><strong>LocalStorage</strong> for storing cart & order data</li>
          <li><strong>Bootstrap</strong> for styling and layout</li>
          <li><strong>Free Product API</strong> for getting demo products</li>
        </ul>

        <h5 className="fw-bold mt-4">Purpose</h5>
        <p>
          This application is created only for demo and educational purposes. No
          backend is used, and all data is stored temporarily in the browser.
        </p>

        <h5 className="fw-bold mt-4">Project Highlights</h5>
        <ul className="mt-2">
          <li>Add, remove, and update cart items</li>
          <li>Auto calculation of subtotal, tax, and total</li>
          <li>Clean and simple UI optimized for beginners</li>
          <li>Fast performance with efficient state handling</li>
        </ul>

        <p className="mt-4 text-muted text-center">
          © {new Date().getFullYear()} – Demo React Shopping Cart Project by <a href="https://devsupport.co.in/profile/">Niraj Kumar Singh</a>
        </p>
      </div>
    </div>
  );
}
