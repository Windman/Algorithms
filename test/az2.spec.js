const assert = require("chai").assert;
const fs = require("fs");

// Найти минимальный маршрут до точки назначения
function minimumDistance(area) {
  const findDestination = area => {
    const point = [0, 0];
    for (let y = 0; y < area.length; y++) {
      for (let x = 0; x < area.length; x++) {
        if (area[y][x] === 9) {
          point[0] = y;
          point[1] = x;
        }
      }
    }
    return point;
  };

  const point = findDestination(area);
  let counter = 0;
	y = 0;
	x = 0;
	while (y != point[0] && x !== point[1]) {
		if (area[x] > 0 && x != point[1]) {
			x++;
		}
	}

  return counter;
}

describe.skip("Finding minimum distance to the point int 2d array", () => {
	let area = [];
	
	before(done => {
    let inputString = "";
    let currentLine = 0;

    fs.readFile("./arrays/totaldistance/sample2.txt", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      inputString = data
        .toString()
        .replace(/\s*$/, "")
        .split("\n")
        .map(str => str.replace(/\s*$/, ""));

      main(inputString);
    });

    function readLine() {
      return inputString[currentLine++];
    }

    function main(inputString) {
      let d = inputString.length - 1;
      area = Array(d);

      for (let i = 0; i < d; i++) {
        area[i] = readLine()
          .split(" ")
          .map(arrTemp => parseInt(arrTemp, 10));
			}

			done();
    }
  });

  after(done => {
		area = [];
		done();
  });

  beforeEach(() => {
    
  });

  it("Test 1", done => {
		assert.strictEqual(minimumDistance(area), 1);
		done();
  });
});
