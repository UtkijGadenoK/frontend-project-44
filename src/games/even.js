const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber();
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
};
