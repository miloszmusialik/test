for (let i = 0; i <=10; i++) {
    console.log("Milosz");
}

const array1 = new Array(10);
for (i = 0; i < array1.length; i++) {
    array1[i] = (Math.random())
    console.log(array1[i]);
}

function ada (a) {
    const array2 = new Array(a)
    for (i = 0; i < array2.length; i++) {
        array2[i] = (Math.random())
        console.log(array2[i]);
    }
}

ada(10);
