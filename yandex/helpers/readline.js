var readline = require('readline');

const stdInRead = () => {
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
};

module.exports = {
  stdInRead,
};
