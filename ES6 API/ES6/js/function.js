//function declaration

function sumOf (num1, num2){
    const result = num1 + num2;
    return result;
}

// const math1 = sumOf(20,10);
// console.log(math1);

function sumOf (num1, num2 = 0){
    const result = num1 + num2;
    return result;
}

// const math2 = sumOf(10); 
// console.log(math2);

// function expression

const sumOfFunction = function sumOf (num1, num2){
    const result = num1 * num2;
    return result;
}

//function expression annoymus

const sumOfFunction1 = function (num1, num2){
    const result = num1 * num2;
    return result;
}

// arrow function 

const arrow = (first,second) => first + second;

const result = arrow(10,20);
console.log(result);

//no parameter arrow function

const noArrow = () => first + second;

// one parameter simple arrow

const one = num => first + second;
//or
const one1 = (num) => first + second;


// multi parameter

const multi = (x, y, z, b, c) =>{
    const result1 = x + y;
    const result2 = z + b;
    const result3 = result2 + c;
    const result = result1 * result3;
    return result;

}

const total = multi(1,2,3,4,5);
console.log(total);


