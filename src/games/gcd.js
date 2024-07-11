import { generateRandomNumber } from '../index.js';
import runGame from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => runGame(generateRound, gameDescription);

export default runGcdGame;
