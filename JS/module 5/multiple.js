function multipleOfNumbers(number){

    let result = 1;

    for(let i=1; i<number; i++){
    result = result * i;
          
    }

    return result;
}

const multiple = multipleOfNumbers(9);
console.log(multiple);







