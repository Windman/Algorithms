const readLine = require('./helpers/readline').stdInRead;
const prepareInputData = require('./helpers/prepare').prepare;

async function main() {
    const lines = await readLine();
    const data = prepareInputData(lines);

    // Provide a solution here
    console.log(data);
}

main();

