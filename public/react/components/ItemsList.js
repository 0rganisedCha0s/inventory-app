import React from "react";
import { Item } from "./Item";

const ItemsList = ({ items, onItemClick }) => {
  return (
    <div className="item-list">
      {/* Iterate over each item in the items array */}
      {items.map((item, idx) => (
        <Item
          item={item}
          key={idx}
          onItemClick={onItemClick} // Apply the onItemClick function to each item
        />
      ))}
    </div>
  );
};

export default ItemsList;
