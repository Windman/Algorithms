const get = (obj, path) => {
  if (typeof obj !== 'object' && obj !== null) {
    return undefined;
  }

  const pathToValue = path.split('.');
  let result = obj;
  while (pathToValue.length > 0) {
    const key = pathToValue.shift();
    result = result[key];
    if (typeof result === 'undefined') {
      return result;
    }
  }

  return result;
};

console.log(get({ a: { b: 1 } }, 'a.b') === 1); // 1
console.log(typeof get({ a: { b: 1 } }, 'a.c') === 'undefined'); // undefined
console.log(typeof get({}, 'a.c') === 'undefined'); // undefined

const check = (str) => {
  if (typeof obj !== 'string' && str.length === 0) {
    return undefined;
  }

  const stack = [];
  const map = new Map();
  map.set(')', '(');
  map.set('}', '{');
  map.set(']', '[');

  const chars = str.split('');

  for (let i = 0; i < chars.length; i++) {
    if (map.has(chars[i])) {
      const close = chars[i];
      const open = map.get(close);

      if (open !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(chars[i]);
    }
  }

  return stack.length === 0;
};

console.log(check('')); // undefined
console.log(check('{[()]}')); // true
console.log(check('{[(])}')); // false

// Flat
const flat = (arr) => {
  const result = [];

  queue = [...arr];

  while (queue.length > 0) {
    let elt = queue.shift();
    if (Array.isArray(elt)) {
      queue = [].concat.apply(queue, elt);
    } else {
      result.push(elt);
    }
  }

  console.log(result);

  return result;
};

flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
flat([1, 2, [3, 4], 5, 6, [7, [8, 9, [10, 11]]]]);

// Currying
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function pass(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

const curried = curry((a, b, c) => [a, b, c]);
console.log(curried(1)(2)(3)); // [1, 2, 3]
console.log(curried(1)(2)); // func
console.log(curried(1,2,3));


// TODO Debounce
function debounce(func, ms) {
  let start = Date.now();
  let times = [];

  setTimeout(function run() {
    times.push(Date.now() - start); 
  
    if (start + ms < Date.now()) {
      console.log(times);
    }
    else setTimeout(run); 
  });

  return function dbc() {

  }
}

const debounced = debounce(() => console.log('Hello'), 5000);

setTimeout(() => {
  const debounced = debounce(() => console.log('Hello'), 5000);
}, 6000);

// TOTO Throttling
