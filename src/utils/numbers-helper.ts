const numFormat = new Intl.NumberFormat('en', {
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});

export const getFormattedNumber = (num: number | bigint): string => {
  return numFormat.format(num);
};
