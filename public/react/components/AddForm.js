
  import React, { useState } from 'react';

  const AddForm = () => {
    const [formData, setFormData] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('');
  

import React, { useState } from "react";

// Code for the AddForm Component
const AddForm = () => {
  const [formData, setFormData] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [message, setMessage] = useState("");




    const handleSubmit = async (e) => {
      e.preventDefault();

      const category = e.target.elements.category.value;
      

      const updatedFormData = {
        ...formData,
        category
        
      };

      try {
        const response = await fetch('http://localhost:3000/api/items/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        });

        if (response.status === 200) {
          setSubmissionStatus('Data submitted successfully!');
          setFormData({});
          window.location.reload(true)
          e.target.reset(); // Reset the form fields
          
        } else {
          setSubmissionStatus('Error submitting data: ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmissionStatus('Error: ' + error.message);
      }
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  

    return (
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Add New Item</h2>

        

        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange} 
          class="form-item"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          required
          
          title="Enter a valid price (e.g., 10.99)"
          onChange={handleChange}
          class="form-item"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
          onChange={handleChange}
          class="form-item"
        />

        <select name="category" onChange={handleChange} class="form-item">
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>

        <input type="text" name="image" placeholder="Image" onChange={handleChange}  class="form-item" />
  
        <button type="submit" class="btn-standard">Submit</button>
  

        {submissionStatus && <p>{submissionStatus}</p>}

      </form>
    );
  };

  