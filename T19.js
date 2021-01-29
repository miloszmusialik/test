const a = 100;
const b = 200;
const c = 300;

let sum

(function add (a , b , c) {
    sum = a + b + c;
    return sum;
})(a, b, c,);

console.log(sum);