const a = [12, 34, 7, 56, 7];
const b = [12, 4, 5, 6, 5, 34];

const newA = [...a, ...b];

const max = Math.max(...newA);

console.log(max);