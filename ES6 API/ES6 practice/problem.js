const students = [
    { name: "mehedy bro", email: 'mehedy@gamil.com', avg: 56, fiftyPercent: true },
    { name: "rokib bro", email: 'rokib@gamil.com', avg: 57, fiftyPercent: false },
    { name: "sakib bro", email: 'sakib@gamil.com', avg: 42, fiftyPercent: false },
    { name: "sojib bro", email: 'sojib@gamil.com', avg: 52, fiftyPercent: true },
    { name: "sunny bro", email: 'sunny@gamil.com', avg: 32, fiftyPercent: false },
    { name: "saki bro", email: 'sunny@gamil.com', avg: 37, fiftyPercent: true },
    { name: "jackie bro", email: 'jackie@gamil.com', avg: 57, fiftyPercent: true }
]

const info = {};

students.map(n => {
    const names = n.name;
    const avgs = n.avg;

    info[names] = avgs;

})

console.log(info);

// const finalSelect = students.filter(n => n.avg >= 50 && n.fiftyPercent === true);


// const names = students.map(n => n.name);

// console.log(names);


// const polapain = [
//     { Name: "Abul", job: "sorkari", salary: 17000 },
//     { Name: "Babul", job: "besorkari", salary: 25000 },
//     { Name: "Kabul", job: "sorkari", salary: 21000 },
//     { Name: "Habul", job: "besorkari", salary: 47000 },
//     { Name: "Jabul", job: "sorkari", salary: 23000 },
//     { Name: "Mabul", job: "besorkari", salary: 55000 },
// ];



// const jamais = polapain.filter(pola =>(pola.job ==='sorkari' && pola.salary >= 20000) || (pola.job ==='besorkari' && pola.salary >= 50000));

// console.log(jamais);


// const polapain = [
//     { Name: "Abul", job: "sorkari", salary: 17000 },
//     { Name: "Babul", job: "besorkari", salary: 25000 },
//     { Name: "Kabul", job: "sorkari", salary: 21000 },
//     { Name: "Habul", job: "besorkari", salary: 47000 },
//     { Name: "Jabul", job: "sorkari", salary: 23000 },
//     { Name: "Mabul", job: "besorkari", salary: 55000 },
// ];


// const info = {};

// polapain.map(n => {

//     const name = n.Name;
//     const salary = n.salary;

//     info[name] = salary;


// })

// console.log(info);




// const Persons = [
//     { id: 'ID01', name: "abul vai", age: 23 },
//     { id: 'ID02', name: "babul vai", age: 43 },
//     { id: 'ID03', name: "habul vai", age: 54 },
//     { id: 'ID04', name: "jabul vai", age: 29 }
// ]

// const info = {};


// Persons.map = (n =>{
//     const name = n.name;
//     const age = n.age;

//     info[name] = age;
// })


// const info = {};

// info['name'] = 'mehedy';
// info['age'] = 25
// console.log(info)

// Persons.map(p => {
//    const id = p.id;
//    const value = p.name;

//    info[id] = value;
// })

// console.log(info);



// const Students = [
//     {
//         student1: {
//             name: 'abul',
//             age: '17',
//             isMale: true,
//             education: {
//                 class: 7,
//                 subjects: ['bangla', 'english', 'math'],
//                 school: 'durgapur high school',
//             }
//         },
//         student2: {
//             name: 'jarina',
//             age: '19',
//             isMale: false,
//             education: {
//                 class: 6,
//                 subjects: ['bangla', 'english', 'math'],
//                 school: 'Rajshahi high school',
//             }
//         },
//         student3: {
//             name: 'habul',
//             age: '15',
//             isMale: true,
//             education: {
//                 class: 9,
//                 subjects: ['bangla', 'english', 'math'],
//                 school: 'Dhaka high school',
//             }
//         }
//     }
// ]


// // expected output
// /**
//  *          My Name is abul.
//             My age is 17.
//             My gender is Male
//             My subjects are: bangla,english,math
//  * 
//  */



// Students.map(s =>{

//     for(i in s){
//         const {name, age, isMale, education} = s[i];
//         const {subjects} = education;

//         const information = `
//         My name is ${name}
//         My age is ${age}
//         My gender is ${(isMale === true ? 'Male' : 'Female')}
//         My subjects are: ${subjects}
//         `

//         console.log(information);
//     }

// })



const array = [5, 67, 8, 8, 8, 334];

const Arrays = array.map(a => (a * a));


const b = Arrays.reduce((previous, current) => {
    const sum = previous + current;
   
    return sum;
},0)

const a = b / Arrays.length;

console.log(a);




