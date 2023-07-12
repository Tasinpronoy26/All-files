
const user = [
    { name: 'John', age: 20 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 30 }
]

const findNames = (arrOfObj) => {

    const names = arrOfObj.map(n => n.name);
    return names;
}

console.log(findNames(user));




