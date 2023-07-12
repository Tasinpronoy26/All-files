function findOddSum(numbers) {

    let sum = 0;

    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            sum = sum + element;
            
        }

    }
    return sum;
    
}

const arrayNumber = [5, 7, 8, 10, 45, 30];
const oddNumber = findOddSum(arrayNumber);
console.log('Sum of the odd:', oddNumber);


