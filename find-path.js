// Function to delete element from the array
function removeFromArray(arr, elt) {
	// Could use indexOf here instead to be more efficient
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] == elt) {
			arr.splice(i, 1);
		}
	}
}

// An educated guess of how far it is between two points
function heuristic(a, b) {
	var d = Math.abs(a.i - b.i) + Math.abs(a.j - b.j);
	return d;
}

function findPath(grid, cols, rows, startCoords, targetCoords) {
	// Open and closed set
	var openSet = [];
	var closedSet = [];

	// Start and end
	var start;
	var end;

	// The road taken
	var path = [];

	function setup() {
		for (var i = 0; i < cols; i++) {
			for (var j = 0; j < rows; j++) {
				grid[i][j] = new Spot(i, j);
			}
		}

		// All the neighbors
		for (var i = 0; i < cols; i++) {
			for (var j = 0; j < rows; j++) {
				grid[i][j].addNeighbors(grid, cols, rows);
			}
		}

		// Start and end
		start = grid[startCoords[0]][startCoords[1]];
		end = grid[targetCoords[0]][targetCoords[1]];
		
		start.wall = false;
		end.wall = false;

		// openSet starts with beginning only
		openSet.push(start);
	}

	function solve() {
		// Am I still searching?
		if (openSet.length > 0) {
			// Best next option
			var winner = 0;
			for (var i = 0; i < openSet.length; i++) {
				if (openSet[i].f < openSet[winner].f) {
					winner = i;
				}
			}
			var current = openSet[winner];

			// Did I finish?
			if (current === end) {
				noLoop();
				console.log('DONE!');
			}

			// Best option moves from openSet to closedSet
			removeFromArray(openSet, current);
			closedSet.push(current);

			// Check all the neighbors
			var neighbors = current.neighbors;
			for (var i = 0; i < neighbors.length; i++) {
				var neighbor = neighbors[i];

				// Valid next spot?
				if (
					!closedSet.includes(neighbor) &&
					!neighbor.wall
				) {
					var tempG =
						current.g +
						heuristic(neighbor, current);

					// Is this a better path than before?
					var newPath = false;
					if (openSet.includes(neighbor)) {
						if (tempG < neighbor.g) {
							neighbor.g = tempG;
							newPath = true;
						}
					} else {
						neighbor.g = tempG;
						newPath = true;
						openSet.push(neighbor);
					}

					// Yes, it's a better path
					if (newPath) {
						neighbor.h = heuristic(
							neighbor,
							end
						);
						neighbor.f =
							neighbor.g + neighbor.h;
						neighbor.previous = current;
					}
				}
			}
			// Uh oh, no solution
		} else {
			console.log('no solution');
			return;
		}

		// Draw current state of everything
		// 

		// for (var i = 0; i < cols; i++) {
		// 	for (var j = 0; j < rows; j++) {
		// 		grid[i][j].show();
		// 	}
		// }

		// for (var i = 0; i < closedSet.length; i++) {
		// 	closedSet[i].show(color(255, 0, 0, 50));
		// }

		// for (var i = 0; i < openSet.length; i++) {
		// 	openSet[i].show(color(0, 255, 0, 50));
		// }

		// Find the path by working backwards
		path = [];
		var temp = current;
		path.push(temp);
		while (temp.previous) {
			path.push(temp.previous);
			temp = temp.previous;
		}

		// for (var i = 0; i < path.length; i++) {
		// path[i].show(color(0, 0, 255));
		//}

		// Drawing path as continuous line
		return path;
	}

	setup();
	return solve();
}

function Spot(i, j, value) {
	// Location
	this.i = i;
	this.j = j;

	// f, g, and h values for A*
	this.f = 0;
	this.g = 0;
	this.h = 0;

	// Neighbors
	this.neighbors = [];

	// Where did I come from?
	this.previous = undefined;

	// Am I a wall?
	this.wall = false;
	if (value === 1) {
		this.wall = true;
	}

	// Figure out who my neighbors are
	this.addNeighbors = function(grid, cols, rows) {
		var i = this.i;
		var j = this.j;
		if (i < cols - 1) {
			this.neighbors.push(grid[i + 1][j]);
		}
		if (i > 0) {
			this.neighbors.push(grid[i - 1][j]);
		}
		if (j < rows - 1) {
			this.neighbors.push(grid[i][j + 1]);
		}
		if (j > 0) {
			this.neighbors.push(grid[i][j - 1]);
		}
		if (i > 0 && j > 0) {
			this.neighbors.push(grid[i - 1][j - 1]);
		}
		if (i < cols - 1 && j > 0) {
			this.neighbors.push(grid[i + 1][j - 1]);
		}
		if (i > 0 && j < rows - 1) {
			this.neighbors.push(grid[i - 1][j + 1]);
		}
		if (i < cols - 1 && j < rows - 1) {
			this.neighbors.push(grid[i + 1][j + 1]);
		}
	};
}

module.exports = findPath;
