const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString());

let good = "";

for(let i = 1; i <= 9; i++){
    good += `${N} * ${i} = ${N * i}\n`;
  }
console.log(good);