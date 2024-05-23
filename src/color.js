function color(format) {
  if (format !== 'hex' && format !== 'rgb') throw new Error("invalid format. use 'hex' or 'rgb'.");

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  if (format === 'hex') {
    const hex = r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    return hex;
  } else if (format === 'rgb') {
    return [r, g, b];
  }
}

module.exports = color;