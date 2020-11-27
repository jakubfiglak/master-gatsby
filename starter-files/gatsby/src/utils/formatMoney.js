const formatter = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

export const formatMoney = (cents) => formatter.format(cents / 100);
