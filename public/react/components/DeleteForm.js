import React, { useState } from 'react';

const DeleteForm = () => {
  const [productId, setProductId] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/items/:id`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSubmissionStatus('Data deleted successfully!');
        setProductId('');
      } else {
        setSubmissionStatus('Error deleting data: ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('Error: ' + error.message);
    }
  };

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="Product ID"
        required
        value={productId}
        onChange={handleChange}
      />
      <button type="submit">Delete</button>

      {submissionStatus && <p>{submissionStatus}</p>}
    </form>
  );
};

export default DeleteForm;