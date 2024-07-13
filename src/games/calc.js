import { runGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const a = generateRandomNumber(1, 20);
  const b = generateRandomNumber(1, 20);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));

  return { question, correctAnswer };
};

const calcGame = {
  description: 'What is the result of the expression?',
  generateRound,
};

const runCalcGame = () => runGame(calcGame);

export default runCalcGame;
