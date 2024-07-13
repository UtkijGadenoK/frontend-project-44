import { runGame } from '../index.js';
import generateRandomNumber from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = generateRandomNumber(5, 10); // Использование функции генерации чисел
  const start = generateRandomNumber(); // Использование функции генерации чисел
  const step = generateRandomNumber(1, 5); // Использование функции генерации чисел
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = generateRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return {
    question,
    correctAnswer,
  };
};

const progressionGame = {
  description: 'What number is missing in the progression?',
  generateRound,
};

const runProgressionGame = () => runGame(progressionGame);

export default runProgressionGame;
