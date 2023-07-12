function inchesToFeet(inches){

    const feet = inches / 12;
    return feet;
}

const myInches = 168;
const myFeet = inchesToFeet(myInches);
console.log(myFeet);