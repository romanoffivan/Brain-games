import { cons } from 'hexlet-pairs';
import run from '..';
import getRandomNum from '../randomGenerator';

const max = 100;
const min = 1;
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
const taskGame = 'Answer "yes" if number even otherwise answer "no"';

const generateData = () => {
  const randomNum = getRandomNum(max, min);
  const correctAnswer = isEven(randomNum);
  return cons(randomNum, correctAnswer);
};

export default () => run(taskGame, generateData);
