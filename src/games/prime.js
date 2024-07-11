import { generateRandomNumber, runGame } from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = generateRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question: question.toString(),
    correctAnswer,
  };
};

const runPrimeGame = () => {
  runGame(generateRound);
};

export default runPrimeGame;
