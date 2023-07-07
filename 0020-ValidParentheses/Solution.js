/**
 * @param {string} s
 * @return {boolean}
 */

function isOpener(c){
    return c == '(' || c == '[' || c == '{';
}

function matchOpener(c){
    if (c == ')') return '(';
    if (c == ']') return '[';
    if (c == '}') return '{';
}

var isValid = function(s) {
        let openers = [];
        
        for (let i = 0; i < s.length; i++){
            if (isOpener(s[i])) openers.push(s[i]);
            else if (matchOpener(s[i]) != openers.pop()) return false;
        }

        return openers.length == 0;
};