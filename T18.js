const a = 100;
const b = 200;
const c = 300;

function addOne (a) {
    return a + 1;
}
const result = addOne(a);
console.log(result);

const addTwo = function (a) {
    return a + 2;
}
console.log(addTwo(a));

const addThree = a => a + 3;
console.log(addThree(a));

function add (a, b) {
    return a + b;
}
const result2 = add(a, b);
console.log(result2);