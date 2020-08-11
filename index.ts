const handSecond = document.getElementById("hand-second");
const handMinute = document.getElementById("hand-minute");
const handHour = document.getElementById("hand-hour");

const setClock = () => {
  let date = new Date();

  let second = (date.getSeconds() / 60) * 360;

  let minute = (date.getMinutes() / 60) * 360;

  let hour = (date.getHours() / 12) * 360;

  handSecond!.style.setProperty(
    "transform",
    `translateX(-50%) rotate(${second}deg)`
  );

  handMinute!.style.setProperty(
    "transform",
    `translateX(-50%) rotate(${minute}deg)`
  );

  handHour!.style.setProperty(
    "transform",
    `translateX(-50%) rotate(${hour}deg)`
  );
};

setInterval(setClock, 1000);

window.onload = () => {
  setClock();
};
