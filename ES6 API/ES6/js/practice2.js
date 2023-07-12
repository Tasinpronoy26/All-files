//1

const getEvent = (array) => {
    const evenArray = [];
    for ( arr of array){
        if (arr.length % 2 === 0){
            evenArray.push(arr);
        }
    }
    return evenArray;
}

const array1 = getEvent(['raju', 'tasin', 'pronoy', 'akash', 'venom']);
console.log(array1);
