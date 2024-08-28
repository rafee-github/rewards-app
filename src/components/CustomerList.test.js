// src/components/CustomerList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerList from './CustomerList';

const mockCustomers = [
  {
    customerId: 1,
    name: 'Akash',
    transactions: [{ id: 1, amount: 120, date: '2023-06-15' }],
    monthlyRewards: { 6: 90 },
    totalRewards: 90,
  },
];

describe('CustomerList', () => {
  test('should render customer names and rewards', () => {
    render(<CustomerList customers={mockCustomers} />);

    expect(screen.getByText('Akash')).toBeInTheDocument();
    expect(screen.getByText('Total Rewards: 90')).toBeInTheDocument();
  });

  test('should render transactions and monthly rewards', () => {
    render(<CustomerList customers={mockCustomers} />);

    expect(screen.getByText('2023-06-15: $120')).toBeInTheDocument();
    expect(screen.getByText('Month June: 90 points')).toBeInTheDocument();
  });
});
