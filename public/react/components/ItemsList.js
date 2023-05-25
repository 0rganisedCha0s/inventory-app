import React from 'react';
import { Item } from './Item';

const ItemsList = ({ items, onItemClick }) => {
  return (
<<<<<<< HEAD
    <div>
=======
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
>>>>>>> 37c1d39 (added SelectedItem, still need to style it further. did the styling for ItemList. User can now click on any item in list to display it and then return to the list of items)
      {items.map((item) => (
        <div key={item.id} onClick={() => onItemClick(item)}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

<<<<<<< HEAD
export default ItemsList;
=======
export default ItemsList; */
 
>>>>>>> 37c1d39 (added SelectedItem, still need to style it further. did the styling for ItemList. User can now click on any item in list to display it and then return to the list of items)
