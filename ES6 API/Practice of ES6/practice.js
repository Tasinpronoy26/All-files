//1
// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         {
//                             school_name: "ABC secondary school"

//                         },

//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }

// const {Sophia} = data;
// const {study} = Sophia;
// const [x,y] = study;
// const {secondary} = y;
// const [a,b] = secondary;
// const {location} = b;

// console.log(location);



//2
// let data =
//     [
//         {
//             "pHeroCourses": {
//                 "course-x": "web development"
//             }
//         },
//         {
//             "pHeroCourses": {
//                 "course-y": "phitron"
//             }
//         },
//         {
//             "pHeroCourses": {
//                 "course-z": "acc"
//             }
//         },
//         {
//             "pHeroCourses": {
//                 "course-xyz": "level-2"
//             },
//             "locationField": {
//                 "en-US": {
//                     "lat": 19.28563,
//                     "lon": 72.8691
//                 }
//             }
//         }
//     ]


// const [a, b, c, d] = data;
// const {pHeroCourses} = d;
// const {coursexyz} = pHeroCourses;

// console.log(coursexyz);


//3



// const { activity1 } = activities;
// const [x, y] = activity1
// // const {song_list} = x;
// const { song_1 } = song_list;

// const { activity1 } = activities;
// const [x, y] = activity1
// const { song_list } = y
// const { song_2 } = song_list;



// console.log(song_2);



//4

// let students = {
//     2222: {

//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {

//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }

//     },
//     3333: {

//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {


//     "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }

//     }
// }

// const {2222:x} = students;
// const {address} = x;
// const {city} = address;


// const {3333:x} = students;
// const {name} = x;


// console.log(name);



//5

// let instructor = {
//     name: "Jhankar Mahbub",
//     entrepreneur: true,
//     additionalData: {
//         writer: true,
//         favoriteHobbies: ["travelling", "Coding"],
//         books: ["programming er bolod to bos", "programming er coddogosti"],
//     moreDetails: {
//                 favoriteBasketballTeam: "XYZ",
//                 isYoungest: true,
//                 hometown: {
//                     city: "ABC",
//                     state: "VW",
//                 },
//                 countriesLivedIn: ["Bangladesh", "New York"]
//             }
//     }
// }

// const {additionalData} = instructor;
// const {books} = additionalData;
// const [x,y] = books;

// const {additionalData} = instructor;
// const {moreDetails} = additionalData;
// const {hometown} = moreDetails;
// const {state} = hometown;


// const {additionalData} = instructor;
// const {moreDetails} = additionalData;

// const {countriesLivedIn} = moreDetails ;
// const [x,y] = countriesLivedIn;

// console.log(x);


//6

// const studentData = [

//     {
//         class: 10,
//         details: [
//             {
//                 studentId: '1',
//                 gradingDetails: [{ grade: 'A' }]
//             },
//             {
//                 studentId: '2',
//                 gradingDetails: [{ grade: 'B' }]
//             }
//         ]
//     },
//     {
//         class: 11,
//         details: [
//             {
//                 studentId: 3,
//                 gradingDetails: [{ grade: 'B' }]
//             },
//             {
//                 studentId: 4,
//                 gradingDetails: [{ grade: 'D' }]
//             }
//         ]
//     },
// ]

// const [a,b] = studentData
// const {details} = a;
// const [x,y]  = details;
// const {gradingDetails} = y;
// const [xy] = gradingDetails;
// const {grade} = xy;


// const [a,b] = studentData
// const {details} = b;
// const [x,y]  = details;
// const {gradingDetails} = y;
// const [c] = gradingDetails;
// const {grade} = c;


// console.log(grade);


let data = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {

                   
    
    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

// const {data:y} = data;
// const [a,b] = y;
// const {bookDetails} = a;
// const {name} = bookDetails;


const {data:y} = data;
const [a,b] = y;
const {bookCategory} = b;


console.log(bookCategory);





