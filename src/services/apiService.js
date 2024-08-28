// src/services/apiService.js
export const fetchCustomerTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { customerId: 1, name: "Akash", transactions: [{ id: 1, amount: 150, date: "2024-06-15" }, { id: 2, amount: 85, date: "2024-07-20" }, { id: 3, amount: 210, date: "2024-08-10" }] },
          { customerId: 2, name: "Suresh", transactions: [{ id: 4, amount: 80, date: "2024-06-18" }, { id: 5, amount: 120, date: "2024-07-25" }, { id: 6, amount: 60, date: "2024-08-15" }] },
        ]);
      }, 2000); 
    });
  };
  