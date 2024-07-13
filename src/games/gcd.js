import { runGame } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const a = generateRandomNumber(1, 100);
  const b = generateRandomNumber(1, 100);
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));

  return { question, correctAnswer };
};

const gcdGame = {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
};

const runGcdGame = () => runGame(gcdGame);

export default runGcdGame;
