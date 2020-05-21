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
