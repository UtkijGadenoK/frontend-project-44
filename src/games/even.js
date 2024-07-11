import readlineSync from 'readline-sync';
import { generateRandomNumber, runGame } from '../index.js';

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

const evenGame = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
};

const runEvenGame = () => runGame(evenGame);

export default runEvenGame;
