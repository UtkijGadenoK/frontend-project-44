import { generateRandomNumber } from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  // Генерируем длину прогрессии от 5 до 10
  const start = generateRandomNumber(); // Начальное число прогрессии
  const step = Math.floor(Math.random() * 5) + 1; // Шаг прогрессии
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  // Генерируем индекс спрятанного числа
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return {
    question,
    correctAnswer,
  };
};

export default {
  description: 'What number is missing in the progression?',
  generateRound,
};
