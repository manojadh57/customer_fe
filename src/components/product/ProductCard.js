import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ product }) {
  const { id, name, price, image } = product; 
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="btn btn-primary mt-auto"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
