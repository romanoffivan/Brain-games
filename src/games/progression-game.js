import { cons } from 'hexlet-pairs';
import run from '..';

const taskGame = 'What number is missing in this progression?';
const arrOfProgression = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];

const generateData = () => {
  const newArray = arrOfProgression.slice();
  const randomElem = Math.floor(Math.random() * newArray.length);
  newArray[randomElem] = '..';
  const randomProgression = newArray.join(' ');
  const correctAnswer = arrOfProgression[newArray.indexOf('..')].toString();
  return cons(randomProgression, correctAnswer);
};

export default () => run(taskGame, generateData);
