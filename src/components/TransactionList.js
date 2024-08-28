// src/components/TransactionList.js
import React from "react";
import { getMonthName } from "../utils/calculateRewards";

const TransactionList = ({ transactions, monthlyRewards }) => {
  return (
    <div>
      <h4>Transactions:</h4>
      <ul className="transaction-list">
        {transactions.map(({ id, amount, date }) => (
          <li key={id}>
            {date}: ${amount}
          </li>
        ))}
      </ul>
      <h4>Monthly Rewards:</h4>
      <ul className="monthly-rewards-list">
        {Object.entries(monthlyRewards).map(([month, points]) => (
          <li key={month}>
            Month {getMonthName(month)}: {points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
