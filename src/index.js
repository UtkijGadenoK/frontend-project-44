import readlineSync from 'readline-sync';

export const generateRandomNumber = (min = 1, max = 100) => Math.floor(
  Math.random() * (max - min + 1)
) + min;

export const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(game.description);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = game.generateRound();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
