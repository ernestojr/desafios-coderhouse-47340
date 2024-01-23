export const sum = (...numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  for (let index = 0; index < numbers.length; index++) {
    if (typeof numbers[index] !== 'number') {
      return null;
    }
  }
  let result = 0;
  for (let index = 0; index < numbers.length; index++) {
    result += numbers[index];
  }
  return numbers.reduce((result, number) => (result + number), 0);
};