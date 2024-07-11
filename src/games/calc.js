import _ from 'lodash';
import { generateRandomNumber, runGame } from '../index.js';

const operations = ['+', '-', '*'];

const generateRound = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operation = _.sample(operations);
  const question = `${num1} ${operation} ${num2}`;
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
      throw new Error(`Unsupported operation: ${operation}`);
  }
  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const runCalcGame = () => {
  runGame(generateRound);
};

export default runCalcGame;
