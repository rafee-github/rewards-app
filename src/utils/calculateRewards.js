// src/utils/calculateRewards.js
export const calculateRewards = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += (amount - 100) * 2;
    }
    if (amount > 50) {
      points += Math.min(amount, 100) - 50;
    }
    return points;
  };
  
  export const calculateMonthlyRewards = (transactions) => {
    const monthlyRewards = {};
  
    transactions.forEach(({ amount, date }) => {
      const month = new Date(date).getMonth() + 1;
      const points = calculateRewards(amount);
  
      if (!monthlyRewards[month]) {
        monthlyRewards[month] = 0;
      }
      monthlyRewards[month] += points;
    });
  
    return monthlyRewards;
  };
  
  export const calculateTotalRewards = (monthlyRewards) => {
    return Object.values(monthlyRewards).reduce((total, points) => total + points, 0);
  };
  
  export const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1); // JavaScript months are 0-based
    return date.toLocaleString('default', { month: 'long' });
}

