const myRandom = (...array) => {
    let areas = [];
    let error = false;
    array.map(x => {
        if (x[0] > x[1]) {
            error = true;
        }
        let temp = {
            start: x[0],
            stop: x[1]
        };
        areas.push(temp);
    });
    if(error) {
        return `error: area's stop should bigger than area's start!`;
    }
    let allLength = 0;
    areas.map(area => {
        area.length = area.stop - area.start;
        area.sizeStart = allLength;
        area.sizeStop = allLength + area.length;
        allLength = allLength + area.length;
    });
    let position = Math.random() * allLength;
    let in_area;
    for (let i = 0; i < areas.length; i++) {
        if (position >= areas[i].sizeStart && position < areas[i].sizeStop) {
            in_area = i;
            break;
        }
    }
    return parseInt(
        Math.random() * areas[in_area].length + areas[in_area].start
    );
};
setInterval(() => {
    console.log(myRandom([0, 100], [200, 300]));
}, 500);
