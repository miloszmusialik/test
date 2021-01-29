const a = true;

console.log(a ? 'This is true' : 'This is false');

const b = (a ? 'This is true' : 'This is false');

console.log(b);

const c = true;
const d = true;

const e = (c ?
    'True 1'
        :
        d ?
    'True 2'
        :
    'False');

console.log(e);