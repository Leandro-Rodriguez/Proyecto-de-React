// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="badge bg-secondary">17</span>
    </div>
  );
};

export default CartWidget;