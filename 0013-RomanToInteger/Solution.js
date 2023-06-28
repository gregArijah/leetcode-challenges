//import modules and libraries

//define roman numerals as key value pairs
const key = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};

//define function that takes a string of roman numerals and returns an integer
const romanToInteger = (romanNumeral) => {
 
    //define var to store running total
    let sum = 0; 

    //iterate thru roman numeral string
    for (let i = 0; i < romanNumeral.length; i++) {  //lvii
        
        //assign names to first two values
        let firstNum = key[romanNumeral[i]];  //key[l]  //vi  //iv  //viii
        let secondNum = key[romanNumeral[i+1]] || 0;
        
        //if first num is greater, add it to the sum      //vvvvvvvvvvvvv
        if (firstNum >= secondNum){
            sum += firstNum;
        } 
        //if second number is greater, subtract the first num from it, then add to sum
        else {
            sum += secondNum - firstNum;
            i++;        
        }
    }
    
    return sum; 
}


