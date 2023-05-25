import React from 'react';
import { Item } from './Item';

const ItemsList = ({ items, onItemClick }) => {
  return (
	<div className="item-list">
	{items.map((item, idx) => (
	  <Item
		item={item}
		key={idx}
		onItemClick={onItemClick}
	  />
	))}
  </div>

  );
};

export default ItemsList; 

/*import React from 'react';
import { Item } from './Item';

const ItemsList = ({ items, onItemClick }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} onClick={() => onItemClick(item)}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemsList; */
 
