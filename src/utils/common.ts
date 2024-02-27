/**
 * Format number
 * Ex: 1000 -> 1,000; 1000000 -> 1,000,000
 */
export function numberWithCommas(number: number | string) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Formula for mortgage payments: M = P[r(1+r)^n/((1+r)^n)-1)]
 * M = the total monthly mortgage payment
 * P = the principal loan amount(Purchase Price - Down Payment)
 * r = your monthly interest rate
 * n = number of payments over the loan’s lifetime.
 */
export const calculateMortgagePerMonth = (
  purchasePrice: number,
  downPayment: number,
  interestRate: number,
  repaymentTime: number
): number => {
  const P = purchasePrice - downPayment;
  const r = interestRate / 100 / 12; // Monthly interest rate;
  const n = repaymentTime * 12; // Total number of payments
  const M = P * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  return isNumber(M) && M >= 0 ? Math.round(M) : 0;
};

export function isNumber(value: number) {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}
