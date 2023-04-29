

//define function that check if numbers are divisible by 3 or 5 or both
const FizzBuzz = (n) =>{
    //results array
    let s =[];
    //iterate thru numbers 1 to n
    for(let i = 1; i <= n; i++){
        //if i is divisible by 3 and 5, push FizzBuzz to array
        if(i % 3 === 0 && i % 5 === 0){
            s.push("FizzBuzz");
        }
        //if i is divisible by 3, push Fizz  array using ternary statementto
        else if(i % 3 === 0){
            s.push("Fizz");
        }
        //if i is divisible by 5, push Buzz to array
        else if(i % 5 === 0){
            s.push("Buzz");
        }
        //if i is not divisible by 3 or 5, push i to array
        else{
            //convert i to string
            s.push(i.toString());
        }
    }
    //return array
    return s;

}



