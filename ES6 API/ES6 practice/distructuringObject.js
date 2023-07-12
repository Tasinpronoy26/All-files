const person = {
    name: 'Tasin',
    Age: 26 ,
    Study: 'CSE',
    Job : 'No job',
    p : [12, 34, 5, 5, 5, 6, 7]
}

// const {name, Age, ...others} = person;
// console.log(name, Age, others);

const {p} = person;
const [x] = p;

console.log(x);