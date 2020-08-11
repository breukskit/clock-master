var handSecond = document.getElementById("hand-second");
var handMinute = document.getElementById("hand-minute");
var handHour = document.getElementById("hand-hour");
var setClock = function () {
    var date = new Date();
    var second = (date.getSeconds() / 60) * 360;
    var minute = (date.getMinutes() / 60) * 360;
    var hour = (date.getHours() / 12) * 360;
    handSecond.style.setProperty("transform", "translateX(-50%) rotate(" + second + "deg)");
    handMinute.style.setProperty("transform", "translateX(-50%) rotate(" + minute + "deg)");
    handHour.style.setProperty("transform", "translateX(-50%) rotate(" + hour + "deg)");
};
setInterval(setClock, 1000);
window.onload = function () {
    setClock();
};
