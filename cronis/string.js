//  Strings
// q1. 
function replaceSpaces(str, length) {
    const space = "%20";
    let newStringChar = [];

    for (let i = 0; i < length; i++) {
        const currentChar = str.charAt(i);
        if (currentChar === ' ') {
            newStringChar.push(space)
        } else {
            newStringChar.push(currentChar);
        } 
    }

    return newStringChar.join('');
}

// q2.
function isShuffledPalindrome(str) {
    let result = false;
    const stack = [];
    // ??

    return result;
}

// q3.
function compressString(str) {
    let prior = -1;
    let charCodeMap = [];

    for (let i = 0; i < str.length; i++) {
        const current = str.charCodeAt(i);
        if (current === prior) {
            const priorRecord = charCodeMap[charCodeMap.length - 1];
            priorRecord[1]++;
        } else {
            charCodeMap.push([current, 1])
        }

        prior = current; 
    }

    return charCodeMap.map(item => {
        const char = String.fromCharCode(item[0]);
        return `${item[1]}${char}`;
    }).join('');
}

console.log(
    compressString("ccaqaaaaabbbbb")  
);