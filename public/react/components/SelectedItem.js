import React from "react";

// Model for each item to display one on the page
export default function SelectedItem({ item, onBack }) {
  return (
    <div className="single-item">
      {/* Display the item title */}
      <h3 className="single-item-name">{item.title}</h3>

      <div className="single-item-image-container">
        {/* Display the item image */}
        <img src={item.image} alt={item.title} className="single-item-image" />
      </div>

      <div className="single-item-info">
        {/* Display the item description */}
        <p className="single-item-description">{item.description}</p>

        <div className="single-item-bottom">
          {/* Display the item category */}
          <div className="single-item-category">{item.category}</div>

          {/* Display the item price */}
          <div className="single-item-price">£{item.price.toFixed(2)}</div>
        </div>
      </div>

      {/* Button to go back to the list of items */}
      <button className="btn-standard" onClick={onBack}>
        Return
      </button>
    </div>
  );
}
