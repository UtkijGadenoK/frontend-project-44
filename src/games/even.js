import { runGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const evenGame = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
};

const runEvenGame = () => runGame(evenGame);

export default runEvenGame;
