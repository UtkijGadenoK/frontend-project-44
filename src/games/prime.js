const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
    const number = generateRandomNumber();
    const question = number.toString();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return {
      question,
      correctAnswer,
    };
  };
  
  export default {
    description: 'Answer "yes" if the number is prime, otherwise answer "no".',
    generateRound,
  };