import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (task, game) => {
  console.log(`Welcome to the Brain Games!\n${task}`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  const iter = (newGame, acc) => {
    const questAndAnswer = game();
    const quest = car(questAndAnswer);
    const correctAnswer = cdr(questAndAnswer);
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      return iter(newGame, acc + 1);
    }
    return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
  };
  iter(game, 0);
};
