function array(input = []) {
  if(!Array.isArray(input)) throw new Error('input must be array.');

  if (input.length == 0) return null;
  const result = input[Math.floor(Math.random() * input.length)];

  return result;
}

module.exports = array;