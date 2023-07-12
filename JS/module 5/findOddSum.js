//findSum() that will take the array [5, 7, 8, 10, 45, 30]


function getSumOfArray (numbers){

    let sum = 0;

    for(let i=0; i<numbers.length; i++){

        const index = i;
        const elements = numbers[index];
        sum = sum + elements;
        console.log(index, elements, sum);

    }
    return sum;
}

// const arrNumbers = [5, 7, 8, 10, 45, 30];
// getSumOfArray(arrNumbers);





//findOddNumberOfSum() that will take the array [5, 7, 8, 10, 45, 30]


function getSumOFOdd (numbers){

    const oddNumbers = [];

    for(let i=0; i<numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if(elements%2 !==0){
            console.log(index, elements);
            oddNumbers.push(elements);
        }
        
    }
    return oddNumbers;
    
}

const NumbersOfArray = [5, 7, 8, 10, 45, 30];
const oddNumbers = getSumOFOdd(NumbersOfArray);
console.log(oddNumbers);
const oddNumbersSum = getSumOfArray(oddNumbers);
console.log('Odd num sum', oddNumbersSum);