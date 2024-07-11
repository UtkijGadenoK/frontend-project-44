import { generateRandomNumber, runGame } from '../index.js';

const generateRound = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operations = ['+', '-', '*'];
  const operation = operations[generateRandomNumber(0, operations.length - 1)];

  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  const question = `${num1} ${operation} ${num2}`;
  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const gameDescription = 'What is the result of the expression?';

const runCalcGame = () => runGame(generateRound, gameDescription);

export default runCalcGame;
