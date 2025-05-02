type Currency = 'GTQ' | 'USD';

export function formatCurrency(amount: number, currency: Currency = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: 'symbol'
  });

  const formatted = formatter.format(amount);

  return formatted;
}
