const readLine = require('./helpers/readline').stdInRead;
const prepareInputData = require('./helpers/prepare').prepare;

async function main() {
  const lines = await readLine();
  const data = prepareInputData(lines);

  // Provide a solution here
  const result1 = solution1(data);

  console.log(result1);
}

main();

solution1 = (data) => {
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

  return result;
};
