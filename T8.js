const numbers = [1,2,3];
numbers.push(4);
console.log(numbers);

const a = numbers.push(6);
console.log(a);
console.log(numbers);

const b = numbers.pop();
console.log(b);

const c = numbers.shift();
console.log(c);
console.log(numbers.length);
console.log(numbers);

const d = numbers.unshift(9);
console.log(d);
console.log(numbers);
