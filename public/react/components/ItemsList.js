import React from 'react';
import { Item } from './Item';

const ItemsList = ({ items, onItemClick }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => onItemClick(item)}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
