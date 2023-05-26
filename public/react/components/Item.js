import React from "react";

// Model for each item to display all on one page
export const Item = ({ item, onItemClick }) => {
  return (
    <div className="item-container" onClick={() => onItemClick(item)}>
      {/* Display the item title */}
      <h3 className="item-name">{item.title}</h3>

      <div className="item-image-container">
        {/* Display the item image */}
        <img src={item.image} alt={item.title} className="item-image" />
      </div>

      <div className="item-info">
        {/* Display the item description */}
        <p className="item-description">{item.description}</p>

        <div className="item-bottom">
          {/* Display the item ID */}
          <div className="item-id">ID: {item.id}</div>

          {/* Display the item category */}
          <div className="item-category">{item.category}</div>

          {/* Display the item price */}
          <div className="item-price">£{item.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};
