const zhishu = (thenumber) => {
    let temp = 0;
    let y = [];
    let n = thenumber;
    while (n > -1) {
        y.push(n);
        n--;
    }
    for (let the in y) {
        if (thenumber % the == 0) {
            temp++;
        }
    }
    if (temp == 2) {
        console.log(thenumber);
    }
}

for (let i = 2; ; i++) {
    zhishu(i);
}
