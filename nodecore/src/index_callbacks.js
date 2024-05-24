//non blocking using timers

function blockMe(message) {
    console.log(message);
}


function delay(callback, timer) {
    setTimeout(callback, timer, "late message");
}

blockMe("start");
delay(function (message) {
    console.log(message)
}, 1000);
blockMe("end");