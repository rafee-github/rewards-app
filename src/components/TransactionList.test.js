// src/components/TransactionList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionList from './TransactionList';

const mockTransactions = [
  { id: 1, amount: 120, date: '2023-06-15' },
  { id: 2, amount: 75, date: '2023-07-20' },
];

const mockMonthlyRewards = {
  6: 90,
  7: 25,
};

describe('TransactionList', () => {
  test('should render a list of transactions', () => {
    render(<TransactionList transactions={mockTransactions} monthlyRewards={mockMonthlyRewards} />);

    expect(screen.getByText('2023-06-15: $120')).toBeInTheDocument();
    expect(screen.getByText('2023-07-20: $75')).toBeInTheDocument();
  });

  test('should render a list of monthly rewards', () => {
    render(<TransactionList transactions={mockTransactions} monthlyRewards={mockMonthlyRewards} />);

    expect(screen.getByText('Month June: 90 points')).toBeInTheDocument();
    expect(screen.getByText('Month July: 25 points')).toBeInTheDocument();
  });
});
