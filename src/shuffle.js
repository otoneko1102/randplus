function string(input) {
  if (typeof input !== 'string' && !Array.isArray(input)) throw new Error('input must be string or array.');

  let array;
  if (input && typeof input === 'string') array = input.split('');
  if (input && Array.isArray(input)) array = input;

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  let result;
  if (typeof input === 'string') {
    result = array.join('');
  } else {
    result = array;
  }

  return result;
}

module.exports = string;