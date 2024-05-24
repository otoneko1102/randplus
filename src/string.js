function string(length, input) {
  if (typeof length !== 'number' || length < 0) throw new Error('length must be non-negative number.');
  if (input && typeof input !== 'string' && !Array.isArray(input)) throw new Error('input must be string or array.');

  let chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  if (input && typeof input === 'string') chars = input.split('');
  if (input && Array.isArray(input)) chars = input;

  for (const char of chars) {
    if (typeof char !== 'string') throw new Error('all elements of input must be string.');
  }

  const len = parseInt(length);

  let result = '';
  if (len == 0) {
    result = null;
    return result;
  }
  for (let i = 0; i < len; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  
  return result;
}

module.exports = string;