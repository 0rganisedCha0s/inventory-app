import React, { useState } from 'react';

const UpdateForm = () => {
  const [productId, setProductId] = useState('');
  const [formData, setFormData] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      category: e.target.elements.category.value
    };

    try {
      const response = await fetch(`http://localhost:3000/api/items/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.status === 200) {
        setSubmissionStatus('Data submitted successfully!');
        setFormData({});
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="productId"
        placeholder="Product ID"
        required
        value={productId}
        onChange={handleProductIdChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        required
        pattern="[0-9]+(\.[0-9]{1,2})?"
        title="Enter a valid price (e.g., 10.99)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        required
        onChange={handleChange}
      />

      <select name="category" onChange={handleChange}>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelry">Jewelry</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's clothing</option>
      </select>

      <input type="text" name="image" placeholder="Image" onChange={handleChange} />

      <button type="submit">Submit</button>

      {submissionStatus && <p>{submissionStatus}</p>}
    </form>
  );
};

export default UpdateForm;
