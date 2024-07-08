import average from '../src/average';

test('make the average of 1, 2, 3, 4, 5', () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
});