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

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => runGame(generateRound, gameDescription);

export default runEvenGame;
