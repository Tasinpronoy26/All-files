//1

const multiP = (x, y, z) => {
    const result1 = x * y;
    const result = result1 * z;
    return result; 
}

const a = multiP(2, 2, 2);
// console.log(a);


//2

const threeLine = `I am a web developer.
I love to code
I love to eat biriyani`;
// console.log(threeLine);

//3

const twoP = (x, y=0) => x + y;

const result3 = twoP(10);
// console.log(result3);