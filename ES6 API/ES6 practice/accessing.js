const Person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '09432723',
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "andorkilla high school",
        subjects: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}

//dot notation
// const age = Person.age;



//braket notation
// const age = Person['age'];
// console.log(age);


const edu = Person.education.subjects[2].name;

console.log(edu);