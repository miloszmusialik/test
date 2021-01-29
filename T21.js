const a = 1;
const b = 2;

function addS (a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

console.log(addS(a, b));