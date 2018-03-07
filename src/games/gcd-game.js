import { cons } from 'hexlet-pairs';
import run from '..';
import getRandomNum from '../randomGenerator';

const min = 1;
const max = 10;
const taskGame = 'Find the greatest common divisor of given numbers.';

const generateData = () => {
  const firstNum = getRandomNum(max, min);
  const secondNum = getRandomNum(max, min);
  const getGreatestCommonDivisor = (x, y) => {
    if (y) {
      return getGreatestCommonDivisor(y, x % y);
    }
    return x;
  };
  const randomExpression = `${firstNum} ${secondNum}`;
  const correctAnswer = `${getGreatestCommonDivisor(firstNum, secondNum)}`;
  return cons(randomExpression, correctAnswer);
};

export default () => run(taskGame, generateData);
