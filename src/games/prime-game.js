import { cons } from 'hexlet-pairs';
import run from '..';
import getRandomNum from '../randomGenerator';

const min = 1;
const max = 100;
const taskGame = 'Is this number prime?';

const isPrime = (num) => {
  const squareRoot = Math.sqrt(num);
  const primeCountUp = (acc) => {
    if (acc > squareRoot) {
      return true;
    } else if (num % acc === 0) {
      return false;
    }
    return primeCountUp(acc + 1);
  };
  return primeCountUp(2);
};

const generateData = () => {
  const quest = getRandomNum(max, min);
  const correctAnswer = isPrime(quest) ? 'yes' : 'no';
  return cons(quest, correctAnswer);
};

export default () => run(taskGame, generateData);
