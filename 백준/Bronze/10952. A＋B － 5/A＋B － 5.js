const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const answers = [];

for (let line of input) {

  const [aStr, bStr] = line.trim().split(/\s+/);
  const a = Number(aStr);
  const b = Number(bStr);

  if (a === 0 && b === 0) break;

  answers.push(a + b);
}

console.log(answers.join('\n'));