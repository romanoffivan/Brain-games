import { cons } from 'hexlet-pairs';
import run from '..';
import getRandomNum from '../randomGenerator';

const min = 100;
const max = 999;
const taskGame = 'Balance the given number.';

const getBalance = (number) => {
  const arr = number.toString().split('').map(elem => Number(elem)).sort();
  while (arr[arr.length - 1] - arr[0] > 1) {
    arr[arr.length - 1] -= 1;
    arr[0] += 1;
    arr.sort();
  }
  return arr.join('');
};

const generateData = () => {
  const randomNum = getRandomNum(max, min);
  const correctAnswer = getBalance(randomNum);
  return cons(randomNum, correctAnswer);
};

export default () => run(taskGame, generateData);
