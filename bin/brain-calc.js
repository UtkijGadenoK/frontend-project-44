#!/usr/bin/env node

//Импорт модуля
import readline from 'readline';
import _ from 'lodash';

//Импорт приветствия
import greetUser from '../src/cli.js';
const userName = greetUser();

//Интерфейс ввода и вывода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Генерация случайного числа от 0 до 100
const generateRandomNumber = () => Math.floor(Math.random() * 101);

// Математические операции
const operations = ['+', '-', '*'];

//Общий вопрос
console.log('What is the result of the expression?');

//Генерация случайной задачи
const   startGame = () => {
    let correct = 0;

    const askQuestion = () => {
        if (correct < 3) {
            const number1 = generateRandomNumber();
            const number2 = generateRandomNumber();
            const operation = _.sample(operations);

            const question = `${number1} ${operation} ${number2}`;
            let correctAnswer;
            switch (operation) {
                case '+':
                    correctAnswer = number1 + number2;
                    break;
                case '-':
                    correctAnswer = number1 - number2;
                    break
                case '*':
                    correctAnswer = number1 * number2;
                    break;
            }

            rl.question(`Question: ${question}\nYour answer: `, (answer) => {
                if (answer === correctAnswer.toString()) {
                    console.log('Correct!');
                    correct += 1;
                    askQuestion()
                } else {
                    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
                    console.log(`Let's try again, ${userName}!`);
                    rl.close();
                }
            });
    } else {
        console.log(`Congratulations, ${userName}!`);
        rl.close();
    }
};

askQuestion();
};

startGame();