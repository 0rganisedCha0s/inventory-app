import React, { useState, useEffect } from 'react';
import ItemsList from './ItemsList';
import SelectedItem from './SelectedItem';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';
import DeleteForm from './DeleteForm';

import apiURL from '../api';

export const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackToItems = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemData = await response.json();
      console.log(itemData);
      setItems(itemData);
    } catch (err) {
      console.log("Oh no an error!", err);
    }
  }

  return (
    <main>
      <h1>Item Store</h1>
      <h2>All things 🔥</h2>
      {selectedItem ? (
        <SelectedItem item={selectedItem} onBack={handleBackToItems} />
      ) : (
        <>
          <ItemsList items={items} onItemClick={handleItemClick} />
          <div>
            <AddForm />
          
            <UpdateForm />
            <DeleteForm />
          </div>
        </>
      )} 
    </main>
  ); 
};
