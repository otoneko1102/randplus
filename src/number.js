function number(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') throw new Error('start and end must be numbers.');
  if (start > end) throw new Error('start must be less than or equal to end.');

  const result = Math.random() * (end - start) + start;

  return result;
}

module.exports = number;