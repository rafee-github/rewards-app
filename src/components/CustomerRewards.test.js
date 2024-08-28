// src/components/CustomerRewards.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CustomerRewards from './CustomerRewards';
import * as apiService from '../services/apiService';

// Mock the API service
jest.mock('../services/apiService');

const mockData = [
  {
    customerId: 1,
    name: 'John Doe',
    transactions: [
      { id: 1, amount: 120, date: '2023-06-15' },
      { id: 2, amount: 75, date: '2023-07-20' },
      { id: 3, amount: 200, date: '2023-08-10' },
    ],
  },
];

describe('CustomerRewards', () => {
  test('should display customer rewards data correctly', async () => {
    apiService.fetchCustomerTransactions.mockResolvedValue(mockData);

    render(<CustomerRewards />);

    await waitFor(() => screen.getByText('John Doe'));

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Total Rewards: 365')).toBeInTheDocument();
  });

  test('should handle API errors gracefully', async () => {
    apiService.fetchCustomerTransactions.mockRejectedValue(new Error('API Error'));

    render(<CustomerRewards />);

    await waitFor(() => screen.getByText('Failed to load customer data.'));

    expect(screen.getByText('Failed to load customer data.')).toBeInTheDocument();
  });
});
