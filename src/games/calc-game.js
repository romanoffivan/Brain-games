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
  const calcNum = (data) => {
    if (data === '+') {
      return firstNum + secondNum;
    } else if (data === '-') {
      return firstNum - secondNum;
    }
    return firstNum * secondNum;
  };
  const randomExpression = `${firstNum} ${randomOperator} ${secondNum}`;
  const correctAnswer = `${calcNum(randomOperator)}`;
  return cons(randomExpression, correctAnswer);
};

export default () => run(taskGame, generateData);
