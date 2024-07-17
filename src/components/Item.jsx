// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={product.image} className="card-img-top product-image" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <Link to={`/item/${product.id}`} className="btn btn-primary">Ver detalles</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;