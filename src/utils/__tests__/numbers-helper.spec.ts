import { getFormattedNumber } from '../numbers-helper';

describe('numbers helper', () => {
  test.each`
    num     | expected
    ${5.0}  | ${'5.0'}
    ${2.33} | ${'2.33'}
    ${88.8} | ${'88.8'}
  `('should return formatted num', ({ num, expected }) => {
    expect(getFormattedNumber(num)).toBe(expected);
  });
});
