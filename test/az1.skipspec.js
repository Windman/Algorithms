const assert = require("chai").assert;

function ClosestXdestinations(numDestinations, allLocations, numDeliveries) {
  const getLength = point => {
		return +Math.sqrt(Math.pow(point[0],2) + Math.pow(point[1],2)).toFixed(5);
  };

	const filtered = allLocations.filter(function(item, pos) {
    return allLocations.indexOf(item) == pos;
	});
	
  const sorted = filtered.sort((a, b) => {
    if (getLength(a) > getLength(b)) {
      return 1;
    } else if (getLength(a) < getLength(b)) {
      return -1;
    } else {
      return 0;
    }
  });

  return sorted.slice(0, numDeliveries);
}

describe("New one", () => {
  let r = [];

  before(done => {
    done();
  });

  after(done => {
    done();
  });

  beforeEach(() => {
    r = [];
  });

  it.skip("Test 1", done => {
    const numDestinations = 3;
    const allLocations = [[1, 2], [3, 4], [1, -1], [5, 6], [5, 7], [5, 6]];
    const numDeliveries = 2;

    assert.deepStrictEqual(
      ClosestXdestinations(numDestinations, allLocations, numDeliveries),
      [[1, -1], [1, 2]]
    );

    done();
  });

  it.skip("Test 2", done => {
    const numDestinations = 3;
    const allLocations = [[1, -3], [1, 2], [3, 4]];
    const numDeliveries = 1;

    assert.deepStrictEqual(
      ClosestXdestinations(numDestinations, allLocations, numDeliveries),
      [[1, 2]]
    );

    done();
  });

  it("Test 3", done => {
    const numDestinations = 6;
    const allLocations = [[3, 6], [2, 4], [5, 3], [2, 7], [1, 8], [7, 9]];
    const numDeliveries = 3;

    assert.deepStrictEqual(
      ClosestXdestinations(numDestinations, allLocations, numDeliveries),
      [[2, 4], [3, 6], [5, 3]]
    );

    done();
  });
});
