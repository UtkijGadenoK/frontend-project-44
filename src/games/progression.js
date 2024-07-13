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
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = generateRandomNumber(); // Начальное число прогрессии
  const step = Math.floor(Math.random() * 5) + 1; // Шаг прогрессии
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = Math.floor(Math.random() * progressionLength);
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
