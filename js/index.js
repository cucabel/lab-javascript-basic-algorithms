let hacker1 = 'Luis';
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Isabel';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if (hacker1.length < hacker2.length)
console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
else 
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops
let caps = '';
let count = 0;
while (count < hacker1.length) {
  caps += hacker1[count] + ' ';
  count++;
}
console.log(`${caps.toUpperCase()}`);

let reverse = '';
for (let i = hacker1.length-1; i >= 0; i--)
  reverse += hacker1[i];
console.log(`${reverse}`);

for (let i = 0; i < Infinity; i++) {
  if (hacker1[i] === false && hacker2[i] === false) {
    console.log('What?! You both have the same name?');
    break;
  } else if (hacker1[i] === hacker2[i]) {
    continue;
  } else if (hacker1[i] < hacker2[i] || hacker2[i] === false) {
    console.log('The driver\'s name goes first.');
    break;
  } else if (hacker2[i] > hacker1[i] || hacker1[i] === false) {
    console.log('The navigator goes first definitely.');
    break;
  }
}