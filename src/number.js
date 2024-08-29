const randInc1 = require('@randplus/0to1');

function number(start = 0, end = 1, inc = false) {
  if (typeof start === 'boolean') {
    inc = start, start = 0, end = 1;
  }
  if (typeof start !== 'number' || typeof end !== 'number') throw new Error('start and end must be numbers.');
  if (start > end) throw new Error('start must be less than or equal to end.');
  if (typeof inc !== 'boolean') throw new Error('inc must be boolean.');

  let result;

  if (inc) {
    result = randInc1() * (end - start) + start;
  } else {
    result = Math.random() * (end - start) + start;
  }

  return result;
}

module.exports = number;