/**
 * @param {string}/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length == t.length){
        let mapper = new Map();
        for (char of s){
            mapper.set(char, (mapper.get(char)||0)+1)
        }
        for (char of t){
            if (mapper.has(char)){
                if(mapper.get(char)>1) mapper.set(char,mapper.get(char)-1)
                else mapper.delete(char)
            }
        }
        if (mapper.size==0) return true;
    }
    return false;
};
