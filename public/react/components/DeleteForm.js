import React, { useState } from 'react';
const DeleteForm = () => {
  const [productId, setProductId] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a DELETE request to delete the item with the specified productId
      const response = await fetch(`http://localhost:3000/api/items/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        // Item deletion was successful
        setSubmissionStatus('Data deleted successfully!');
        window.location.reload(true);
        setProductId('');
      } else {
        // Show error if there is a problem like item not found
        setSubmissionStatus('Error deleting data: ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('Error: ' + error.message);
    }
  };
  const handleChange = (e) => {
    // Update the productId state when the input value changes
    setProductId(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Delete Item</h2>
      <input
        type="number"
        min="1"
        name="id"
        placeholder="Product ID"
        required
        value={productId}
        onChange={handleChange}
        class="form-item"
      />
      <button className='btn-alert' type="submit">Delete</button>
      {submissionStatus && <p>{submissionStatus}</p>}
    </form>
  );
};
export default DeleteForm;