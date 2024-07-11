import { generateRandomNumber, runGame } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) return false;
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

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => runGame(generateRound, gameDescription);

export default runPrimeGame;
