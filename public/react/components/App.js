import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import SelectedItem from "./SelectedItem";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";

import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click and set the selected item
  const onItemClick = (item) => {
    setSelectedItem(item);
  };

  // Function to handle going back to the list of items
  const handleBackToItems = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Function to fetch the items from the api
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
      <h1>Shop Until You Drop</h1>
     
      {selectedItem ? (
        // Render the selected item component if an item is selected
        <SelectedItem item={selectedItem} onBack={handleBackToItems} />
      ) : (
        <>
          {/* Render the list of items */}
          <ItemsList items={items} onItemClick={onItemClick} />

          {/* Render the forms for adding, updating, and deleting items */}
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
