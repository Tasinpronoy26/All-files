function factorial(number){

    let result = 1;
    for(i=number; i>=1; i--){
        
        result= result * i;
        console.log(i);
    }

    return result;
}

const result = factorial(12);
console.log ('factorial number', result);