//1

// const odd = [1, 3, 5, 7, 9];

// const even = odd.map(n => n+1);
// console.log(even);



//2

// const array = [33, 50, 79, 78, 90, 101, 30];

// const newArray = array.filter(n => (n % 10 === 0));
// console.log(newArray);


//3

// const array = [33, 50, 79, 78, 90, 101, 30];

// const newArray = array.find(n => (n % 10 === 0));
// console.log(newArray);


//4

// const array = [1, 9, 17, 22];

// const newArray = array.reduce((previous, current) => {
//     return previous + current;
// } ,0);

// console.log(newArray);



//5

// const people = [
//     { name : 'Meena', age : 20},
//     { name : 'Rina', age : 15},
//     { name : 'Suchorita', age : 22},

// ]



//6

// const student = {
//     name: 'Fredie',
//     age: 26,
// }

// console.log(student.age)



//7

// let data = {
//     location: [
//         {
//             latitude: '34.5 , 37.8',
//             longitude: '36 , 37.8',
//             city: 'Dhaka',
//             country: 'India',

//         }
//     ]
// }

// const {location} = data;
// const [x] = location;
// const{city} = x;

// console.log(city);


//8

// const user = {

//     "id": 1,
//         "name": "Leanne Graham",
//             "username": "Bret",
//                 "email": "Sincere@april.biz",
//                     "address": {
//         "street": "Kulas Light",
//             "suite": "Apt. 556",
//                 "city": "Gwenborough",
//                     "zipcode": "92998-3874",
//                         "geo": {
//             "lat": "-37.3159",
//                 "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//             "company": {
//         "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//                 "bs": "harness real-time e-markets"
//     }
// }

// const {address} = user;
// const {city} = address;
// const {lat} = address.geo;

// const {company} = user;
// const {name} = company;



// console.log(name);



// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);
// console.log(output);


const a = 'Star Wars';

const b = 1977;

const n = [
    {
        title: 'Star Wars',
        director: 'George Lucas',
        year: 1977
    },

    {
        title: 'The  Dark Knight',
        director: 'Christopher Nolan',
        year: 2008
    }
]

const findTheMovie = (arrOfMovies, movieTitle, movieYear) => {


    const title = movieTitle = a => (a = 'Star Wars');
    const year = movieYear = b => (b = 1977);



    const movie = arrOfMovies.filter(n => (n.name === title  && n.year === year));
    return movie;
}

console.log(findTheMovie(n, a, b));












//
// const findTheMovie = n => {
//     const [x, y] = n;
//     return x;

// };

// console.log(findTheMovie(user));




