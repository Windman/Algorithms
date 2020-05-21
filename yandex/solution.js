var readline = require('readline');

function readLine() {
  return new Promise((resolve, reject) => {
    const lines = [];
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

    rl.on('line', function (line) {
      lines.push(line);
    });

    rl.on('close', function (line) {
      resolve(lines);
    });

    rl.on('error', function (err) {
      reject(err);
    });
  });
}

function prepare(lines) {
  if (!lines) {
    throw new Error('incorrect input data');
  }

  return {
    n: Number.parseInt(lines[0], 10),
    lines: lines.splice(1, lines.length),
    array: lines[1]
      ? lines[1].split(' ').map((n) => Number.parseInt(n, 10))
      : undefined,
    array2: lines[2]
      ? lines[2].split(' ').map((n) => Number.parseInt(n, 10))
      : undefined,
  };
}


async function main() {
  const lines = await readLine();
  const data = prepare(lines);

  solutionС(data);
}

main();

solutionС = (data) => {
  const result = [];

  const { n } = data;
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(data.lines[i].split(' ').map((n) => Number.parseInt(n, 10)))
  }

  const center = Math.floor(n / 2); 
  
  let rStart, cStart = ctnter
  let rEnd, cEnd = center;
  
  let steps = center * center;

  while(steps > 0) {
    for (let i = rStart; i < rEnd; ++i) {
      result.push(matrix[rStart][rEnd]);
    }
    
    // For over columns

    steps--;
  }

  const result = '';
  
  process.stdout.write(result.join(' '));
};

solutionE = (data) => {
  const { n } = data;
  const playlist1 = data.array;
  const playlist2 = data.array2;

  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(playlist1[i]);
    result.push(playlist2[i]);
  }

  process.stdout.write(result.join(' '));
};

solutionD = (data) => {
  const { n } = data;

  const chars = n.toString().split('').reverse().join('');

  let result = Number.parseInt(chars, 10);

  if (n < 0) {
    result = result * -1;
  }

  process.stdout.write(result.toString());
};

solutionA = (data) => {
  const lost = 2;
  const usersTotal = data.n;
  const users = data.array;

  const map = [];

  for (let i = 0; i < users.length; i++) {
    map[users[i]] = 1;
  }

  const result = [];
  for (let i = 1; i < usersTotal + 1; i++) {
    if (typeof map[i] === 'undefined') {
      result.push(i);
    }
  }

  process.stdout.write(result.join(' '));
};
