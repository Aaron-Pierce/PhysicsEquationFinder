let lastTime = -1;

let times = []

function tap() {
    if (lastTime === -1) {
        lastTime = new Date().getTime();
        console.log("first Tap")
        return;
    }

    let now = new Date().getTime();

    let deltaT = now - lastTime;
    console.log(deltaT)
    lastTime = now;
    times.push(deltaT);
    console.log(timeAverage())
    document.getElementById("time").innerHTML = (timeAverage() / 1000).toPrecision(5) + " seconds";
    document.getElementById("omega").innerHTML = (2 * Math.PI / (timeAverage() / 1000)).toPrecision(5) + " rad/sec";
}

function timeAverage() {
    let sum = 0;
    for (time of times) {
        sum += time;
    }
    return sum / times.length;
}


if ('ontouchstart' in document.documentElement) {
    document.body.addEventListener('touchstart', function () {
        tap();
    })

} else {

    document.body.addEventListener('click', function () {
        tap();
    })
}