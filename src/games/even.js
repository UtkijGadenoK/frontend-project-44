import { generateRandomNumber, runGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question: question.toString(),
    correctAnswer,
  };
};

const runEvenGame = () => {
  runGame(generateRound);
};

export default runEvenGame;
