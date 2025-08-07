const fs = require('fs');
const data = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const T = data[0];
let out = [];
for (let i = 0; i < T; i++) {
  const a = data[1 + 2 * i];
  const b = data[1 + 2 * i + 1];
  out.push(a + b);
}
console.log(out.join('\n'));