type Currency = 'GTQ' | 'USD';

export function formatCurrency(amount: number, currency: Currency = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: 'narrowSymbol'
  });

  const formatted = formatter.format(amount);

  if (currency === 'USD') {
    return formatted.replace('$', 'US$');
  }

  if (currency === 'GTQ') {
    return formatted.replace('Q', 'GTQ ');
  }

  return formatted;
}
