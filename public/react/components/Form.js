
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />
      <select name="category">
        <option value="hot">Hot</option>
        <option value="mild">Mild</option>
        <option value="sweet">Sweet</option>
      </select>
      <input
        type="file"
        name="image"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;