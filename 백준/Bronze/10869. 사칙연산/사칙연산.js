const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.trunc(A / B));
console.log(A % B);