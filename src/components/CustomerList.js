// src/components/CustomerList.js
import React from "react";
import TransactionList from "./TransactionList";

const CustomerList = ({ customers }) => {
  return (
    <div>
      <h2>Customer Rewards</h2>
      {customers.map((customer) => (
        <div key={customer.customerId} className="customer">
          <h3>{customer.name}</h3>
          <p>Total Rewards: {customer.totalRewards}</p>
          <TransactionList transactions={customer.transactions} monthlyRewards={customer.monthlyRewards} />
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
