import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AddForm from './AddForm';
import fetch from 'isomorphic-fetch';

describe('AddForm component', () => {
  test('submits form data successfully', async () => {
    // Mock the fetch request
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const { getByText, getByPlaceholderText } = render(<AddForm />);

    const titleInput = getByPlaceholderText('Title');
    const priceInput = getByPlaceholderText('Price');
    const submitButton = getByText('Submit');

    // Fill in form inputs
    fireEvent.change(titleInput, { target: { value: 'Test Item' } });
    fireEvent.change(priceInput, { target: { value: '9.99' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Wait for the submission status to be displayed
    await waitFor(() => getByText('Data submitted successfully!'));

    // Assert that the fetch request was made with the correct data
    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:3000/api/items/add',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Test Item',
          price: '9.99',
          category: "men's clothing",
        }),
      })
    );
  });
});
