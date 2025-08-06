const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);
const C = Number(input[1]);

let h = A;
let m = B + C;

if (m >= 60) {
  h += Math.floor(m / 60);
  m = m % 60;
}
if (h >= 24) {
  h = h % 24;
}

console.log(h, m);
