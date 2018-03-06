import readlineSync from 'readline-sync';

const beginingOfTheGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
};

export default beginingOfTheGame;

const even = num => (num % 2 === 0 ? 'yes' : 'no');

export const beginingEvenGame = () => {
  const taskGame = 'Answer "yes" if number even otherwise answer "no"';
  console.log(`Welcome to the Brain Games!\n${taskGame}`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const randomNum = Math.floor(Math.random() * 101) + 1;
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (even(randomNum) !== answer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${even(randomNum)}".\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  iter(0);
};
