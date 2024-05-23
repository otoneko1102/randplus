function integer(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') throw new Error('start and end must be numbers.');

  const startNum = parseInt(start, 10);
  const endNum = parseInt(end, 10);
  if (startNum > endNum) throw new Error('start must be less than or equal to end.');

  const result = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;

  return result;
}

module.exports = integer;