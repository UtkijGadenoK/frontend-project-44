#!/usr/bin/env node

//Импорт модуля
import readline from 'readline';

//Импорт приветствия
import greetUser from '../src/cli.js';
const userName = greetUser();

//Интерфейс ввода и вывода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Правила игры
console.log('Answer "yes" if the number is even, otherwise answer "no".');

//Вопросы
function isEven(number) {
    return number % 2 === 0;
}

function startGame(name) {
    let correct = 0;

    function question() {
        if (correct < 3) {
            const number = Math.floor(Math.random() * 100) + 1;
            rl.question(`Question: ${number}\nYour answer: `, (answer) => {
                const correctAnswer = isEven(number) ? 'yes' : 'no';
                if (answer === correctAnswer) {
                console.log('Correct!');
                correct += 1;
                question();
                } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
                console.log(`Let's try again, ${name}!`);
                rl.close();
                }
            });
        } else {
            console.log(`Congratulations, ${name}!`);
            rl.close();
        }
    }

    question();
}

// Начало игры
startGame(userName);