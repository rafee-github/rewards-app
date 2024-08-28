// src/utils/calculateRewards.test.js
import { calculateRewards, calculateMonthlyRewards, calculateTotalRewards } from './calculateRewards';

describe('calculateRewards', () => {
  test('should return 0 points for amounts less than or equal to $50', () => {
    expect(calculateRewards(50)).toBe(0);
    expect(calculateRewards(30)).toBe(0);
  });

  test('should return correct points for amounts between $50 and $100', () => {
    expect(calculateRewards(75)).toBe(25);
    expect(calculateRewards(100)).toBe(50);
  });

  test('should return correct points for amounts over $100', () => {
    expect(calculateRewards(120)).toBe(90); // 2x20 + 1x50 = 90
    expect(calculateRewards(150)).toBe(150); // 2x50 + 1x50 = 150
  });

  test('should handle edge cases', () => {
    expect(calculateRewards(0)).toBe(0);
    expect(calculateRewards(50)).toBe(0);
    expect(calculateRewards(101)).toBe(52); // 2x1 + 1x50 = 52
  });
});

describe('calculateMonthlyRewards', () => {
  const transactions = [
    { amount: 120, date: '2023-06-15' },
    { amount: 75, date: '2023-06-25' },
    { amount: 200, date: '2023-07-15' },
    { amount: 50, date: '2023-07-20' },
  ];

  test('should calculate rewards for each month', () => {
    const result = calculateMonthlyRewards(transactions);
    expect(result).toEqual({ 6: 115, 7: 250 }); // June: 90+25=115, July: 150+100=250
  });

  test('should return 0 rewards if no transactions are provided', () => {
    const result = calculateMonthlyRewards([]);
    expect(result).toEqual({});
  });
});

describe('calculateTotalRewards', () => {
  test('should return the total rewards across all months', () => {
    const monthlyRewards = { 6: 115, 7: 250, 8: 75 };
    const total = calculateTotalRewards(monthlyRewards);
    expect(total).toBe(440);
  });

  test('should return 0 if there are no monthly rewards', () => {
    const total = calculateTotalRewards({});
    expect(total).toBe(0);
  });
});
