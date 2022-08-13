const age = [13, 15, 11, 14, 18];
const age2 = [23, 25, 21, 15, 13];
const age3 = [21, 23, 25, 16, 25];
const allAges = [...age, ...age2, ...age3];
// console.log(allAges);

const bigest = [565, 988, 808];
const maximum = Math.max(...bigest);
console.log(maximum);
