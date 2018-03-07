import { cons } from 'hexlet-pairs';
import run from '..';
import getRandomNum from '../randomGenerator';

const min = 1;
const max = 10;
const arrayOfOperators = ['+', '-', '*'];
const taskGame = 'What is the result of the expression?';

const generateData = () => {
  const firstNum = getRandomNum(max, min);
  const secondNum = getRandomNum(max, min);
  const randomOperator = arrayOfOperators[Math.floor(Math.random() * arrayOfOperators.length)];
  const calcResult = (x, y, operator) => {
    if (operator === '+') {
      return x + y;
    } else if (operator === '-') {
      return x - y;
    }
    return x * y;
  };
  const randomExpression = `${firstNum} ${randomOperator} ${secondNum}`;
  const correctAnswer = `${calcResult(firstNum, secondNum, randomOperator)}`;
  return cons(randomExpression, correctAnswer);
};

export default () => run(taskGame, generateData);
