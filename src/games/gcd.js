import { generateRandomNumber } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  let num1 = generateRandomNumber();
  let num2 = generateRandomNumber();
  let gcdValue = gcd(num1, num2);

  // Если НОД равен 1, генерируем новые пары
  while (gcdValue < 2) {
    num1 = generateRandomNumber();
    num2 = generateRandomNumber();
    gcdValue = gcd(num1, num2);
  }

  const question = `${num1} ${num2}`;
  const correctAnswer = gcdValue.toString();
  return {
    question,
    correctAnswer,
  };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
};
