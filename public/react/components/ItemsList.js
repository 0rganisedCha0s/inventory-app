import React, { useState } from 'react';
import { Item } from './Item';

const ItemsList = ({ items, onItemClick }) => {
  // useState hook to manage the search query state
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering items based on the search query
  const filteredItems = items.filter((item) => {
    const { title, description } = item;
  //To avoid any case sensitivity issues!
    const lowerCaseQuery = searchQuery.toLowerCase();
  // Check if either the title or description of the item includes the search query
    return (
      title.toLowerCase().includes(lowerCaseQuery) ||
      description.toLowerCase().includes(lowerCaseQuery)
    );
  });
  // Rendering the component with search and the list of items
  return (
    <div>
      <div className="search-bar">
        <div className="input-container">
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search items"
          />
          <span className="search-icon">&#128269;</span>
        </div>
      </div>
      <div className="item-list">
        {filteredItems.map((item, idx) => (
          <Item item={item} key={idx} onItemClick={onItemClick} />
        ))}
      </div>
    </div>
  ); 
};

export default ItemsList;
