import readlineSync from 'readline-sync';

// Функция для приветствия пользователя и получения его имени
export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  
  console.log(`Hello, ${name}!`);
  
  return name;
};

// Функция для запуска игры
export const runGame = (gameLogic, name) => {
  console.log(gameLogic.description);

  for (let i = 0; i < 3; i += 1) {
    const round = gameLogic.generateRound();
    const question = round.question;
    const correctAnswer = round.correctAnswer;
    
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
