const prepare = (lines) => {
  if (!lines) {
    throw new Error('incorrect input data');
  }

  if (lines.length !== 2) {
    throw new Error('incorrect input data content');
  }

  return {
    n: Number.parseInt(lines[0], 10),
    array: lines[1].split(' ').map((n) => Number.parseInt(n, 10)),
  };
};

module.exports = {
  prepare,
};
