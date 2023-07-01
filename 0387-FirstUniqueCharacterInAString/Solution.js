/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let mapper = new Map();
    
    for (let i=0; i<s.length; i++){
        if (!mapper.has(s[i])) mapper.set(s[i],[i]);
        else mapper.get(s[i]).push(i);
    }
    for (let [key,value] of mapper){
        if (value.length==1) return value[0];
    }
    return -1
};

