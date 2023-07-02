var isPalindrome = function(s) {
    s = s.toLowerCase();
    for (let i=0,j=s.length-1;i<j;i++,j--){
    
    
        if (/[\W_]/.test(s[i])) {
            j++;
            continue;
        }

        if (/[\W_]/.test(s[j])) {
            i--;
            continue;
        }

        if (s[i] !== s[j]) {
            return false;
        }

       
    }

    return true;
};
