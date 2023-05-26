import React from 'react';

export default function SelectedItem({ item, onBack }) {
  return (
    <div className="single-item">
      <h3 className="single-item-name">{item.title}</h3>
      <div className="single-item-image-container">
        <img src={item.image} alt={item.title} className="single-item-image" />
      </div>
      <div className="single-item-info">
        <p className="single-item-description">{item.description}</p>
        <div className="single-item-bottom">
          <div className="single-item-category">{item.category}</div>
          <div className="single-item-price">£{item.price.toFixed(2)}</div>
        </div>
      </div>
      <button className="btn-standard" onClick={onBack}>
        Return
      </button>
    </div>
  );
}
