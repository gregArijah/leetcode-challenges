/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let start = 0,j;
    let nextSpace = s.indexOf(' ');
    {nextSpace == -1 ?  j = s.length-1 : j = nextSpace-1}
    let sRev = [] ;


   while (true) {
    
        while (start<=j){
            sRev [start] = s.charAt(j);
            sRev [j] = s.charAt(start);            
            start++;
            j--; 
        };
        if (nextSpace == -1) return sRev.join('');
        sRev[nextSpace] = ' ';
        start = nextSpace+1;
        nextSpace = s.indexOf(' ', start);
        {nextSpace == -1 ? j = s.length-1 : j = nextSpace-1};  
    };
}