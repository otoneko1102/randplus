const randColor = require('@randplus/color');

function color(format, options) {
  return randColor(format, options)
}

function hex(prefix) {
  return randColor.hex(prefix);
}

function rgb() {
  return randColor.rgb();
}

function word(language) {
  return randColor.word(language);
}

module.exports = color;
module.exports.hex = hex;
module.exports.rgb = rgb;
module.exports.word = word;
