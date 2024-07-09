import _ from 'lodash';

import { generateRandomNumber } from '../index.js';

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
  }
  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

export default {
  description: 'What is the result of the expression?',
  generateRound,
};
