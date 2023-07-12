function factorial(number){
    let i = 1;
    let result = 1;

    while(i <= number){

        console.log(i);
        result= result * i;
        i++;


    }
    return result;
}

// const output = factorial(20);
// console.log('Total:',output);




// reverse-


function factorial(number){
    let i = number;
    let result = 1;

    while(i >= 1){

        console.log(i);
        result= result * i;
        i--;


    }
    return result;
}

const output = factorial(20);
console.log('Total:',output);
