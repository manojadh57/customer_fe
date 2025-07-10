import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function OrderSummary({ items }) {
  const navigate = useNavigate();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Order Summary</h5>
        <p className="card-text">
          Total Items: {items.reduce((acc, item) => acc + item.quantity, 0)}
        </p>
        <p className="card-text fw-bold">Total: ${total.toFixed(2)}</p>
        <button
          className="btn btn-success w-100"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
