function findLeapYear(year){

    const newArray = [];

    for(i=0; i<year.length; i++){
        const index = i;
        const elements = year[index];
        if(elements % 4 === 0){
            console.log(elements);
            newArray.push(elements);
        }
    }
    return newArray;
}

const allTheYears = [2023,2024,2025,2028,2030];
const newArray = findLeapYear(allTheYears);
console.log(newArray);
