/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[\W_]/g,'').toLowerCase()
    for (let i=0,j=s.length-1;i<j;i++,j--){
        if (s[i]!==s[j]) return false;
    }
    return  true;
};

