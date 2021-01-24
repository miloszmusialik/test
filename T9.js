const array = new Array(5);
for (i=0; i<5; i++) {
    array[i] = (Math.random());
}
console.log(array);
console.log(array[0]);
console.log(array[2]);

array[1] += 2;
console.log(array);
