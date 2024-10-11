function shuffle(input) {
  if (typeof input !== 'string' && !Array.isArray(input)) throw new Error('input must be string or array.');

  let array;
  if (typeof input === 'string') {
    array = input.split('');
  } else {
    array = input;
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  let result;
  if (typeof input === 'string') {
    result = array.join('');
  } else {
    result = array;
  }

  return result;
}

module.exports = shuffle;
