import { generateRandomNumber } from '../index.js';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  let prime = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

const generateRound = () => {
  const number = generateRandomNumber();
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound,
};
