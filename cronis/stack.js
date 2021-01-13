function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

const minRemoveToMakeValid = function(s) {
    let result = s;
    const open = '(';
    const close = ')';

    const stack = [];
    const remove = [];

    for(let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (char === open) {
            stack.push([i, '(']);
        }

        if (char === close) {
            if (stack.length == 0) {
                remove[i] = 1;
            }

            stack.pop();
        }
    }

    if (stack.length > 0) {
        for(let i = 0; i < stack.length; i++) {
            let startIndex = stack[i][0];
            result = setCharAt(result, startIndex, ' ');
        }
    }

    if (remove.length > 0) {
        for(let i = 0; i < remove.length; i++) {
            if (remove[i] === 1) {
                result = setCharAt(result, i, ' ');
            }
        }
    }

    return result.replace(/\s/g, '').trim();
};

console.log(
minRemoveToMakeValid(')())()((')
);