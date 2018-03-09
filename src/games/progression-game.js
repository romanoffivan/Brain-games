import { cons } from 'hexlet-pairs';
import run from '..';
import getRandomNum from '../randomGenerator';

const taskGame = 'What number is missing in this progression?';
const maxLength = 10;
const min = 1;
const max = 9;

const makeProgression = (start, step) => {
  const iter = (current, acc) => {
    if (acc.length === maxLength) {
      return acc;
    }
    return iter(current + step, acc.concat(current));
  };
  return iter(start, []);
};

export const generateData = () => {
  const start = getRandomNum(max, min);
  const step = getRandomNum(max, min);
  const prog = makeProgression(start, step);
  const newArray = prog.slice();
  const randomElem = Math.floor(Math.random() * newArray.length);
  newArray[randomElem] = '..';
  const randomProgression = newArray.join(' ');
  const correctAnswer = prog[newArray.indexOf('..')].toString();
  return cons(randomProgression, correctAnswer);
};

export default () => run(taskGame, generateData);
