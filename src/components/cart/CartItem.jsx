import React from 'react';

function CartItem({ item, onQuantityChange, onRemove }) {
  const { id, name, image, price, quantity } = item;

  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-2">
          <img src={image} alt={name} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-muted">${price}</p>
          </div>
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            min="1"
            value={quantity}
            onChange={(e) => onQuantityChange(id, Number(e.target.value))}
          />
        </div>
        <div className="col-md-3 text-end pe-4">
          <button className="btn btn-danger" onClick={() => onRemove(id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
