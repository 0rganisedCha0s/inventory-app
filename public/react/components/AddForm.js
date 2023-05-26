import React, { useState } from "react";
// Code for the AddForm Component
const AddForm = () => {
  const [formData, setFormData] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = e.target.elements.category.value;

    const updatedFormData = {
      ...formData,
      category,
    };
    try {
      const response = await fetch("http://localhost:3000/api/items/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
      if (response.status === 200) {
        setSubmissionStatus("Data submitted successfully!");
        setFormData({});
        window.location.reload(true);
        e.target.reset(); // Reset the form fields
      } else {
        setSubmissionStatus("Error submitting data: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("Error: " + error.message);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add New Item</h2>
      {/* Input fields */}
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        onChange={handleChange}
        className="form-item"
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        required
        title="Enter a valid price (e.g., 10.99)"
        onChange={handleChange}
        className="form-item"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        required
        onChange={handleChange}
        className="form-item"
      />
      {/* Dropdown menu for category selection */}
      <select name="category" onChange={handleChange} class="form-item">
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
      {/* Optional image field */}
      <input
        type="text"
        name="image"
        placeholder="Enter Image's URL"
        onChange={handleChange}
        className="form-item"
      />
      {/* Submit button */}
      <button type="submit" className="btn-standard">
        Submit
      </button>
      {/* Display submission status */}
      {submissionStatus && <p>{submissionStatus}</p>}
    </form>
  );
};
export default AddForm;
