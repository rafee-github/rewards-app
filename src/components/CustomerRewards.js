// src/components/CustomerRewards.js
import React, { useEffect, useState } from "react";
import { fetchCustomerTransactions } from "../services/apiService";
import { calculateMonthlyRewards, calculateTotalRewards } from "../utils/calculateRewards";
import CustomerList from "./CustomerList";

const CustomerRewards = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCustomerTransactions();
        const customersWithRewards = data.map((customer) => {
          const monthlyRewards = calculateMonthlyRewards(customer.transactions);
          const totalRewards = calculateTotalRewards(monthlyRewards);
          return { ...customer, monthlyRewards, totalRewards };
        });
        setCustomers(customersWithRewards);
      } catch (err) {
        setError("Failed to load customer data.");
      }
    };

    loadData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return <CustomerList customers={customers} />;
};

export default CustomerRewards;
