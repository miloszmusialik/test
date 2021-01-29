function loop (x) {
    console.log(x);

    if (x >=10) {
        return
    }
    loop (x+1);
}

loop(0);
