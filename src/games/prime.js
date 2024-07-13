import { runGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const primeGame = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound,
};

const runPrimeGame = () => runGame(primeGame);

export default runPrimeGame;
