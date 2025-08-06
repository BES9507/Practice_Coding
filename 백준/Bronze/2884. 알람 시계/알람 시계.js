const fs = require('fs');
const [H, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let h = H;
let m = M;

if (m >= 45) {
  m -= 45;
} else {
  m += 60 - 45;
  h -= 1;
  if (h < 0) h = 23;
}

console.log(h, m);
