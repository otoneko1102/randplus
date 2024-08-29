const randInc1 = require('@randplus/0to1');

function random(inc = false) {
  if (typeof inc !== 'boolean') throw new Error('inc must be boolean.');
  if (inc) {
    const latestVersion = randInc1.versions.at(-1);
    return randInc1(latestVersion);
  } else {
    return Math.random();
  }
}

module.exports = random;