const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");
function setRotation(hand, rotation) {
  hand.style.setProperty("--rotation", rotation);
}
function setClock() {
  const currentDate = new Date();
  const second = currentDate.getSeconds();
  const minute = second / 60 + currentDate.getMinutes();
  const hour = minute / 60 + currentDate.getHours();
  console.log(second, minute, hour);
  setRotation(hourHand, hour * (360 / 12));
  setRotation(minuteHand, minute * (360 / 60));
  setRotation(secondHand, second * (360 / 60));
}
setInterval(setClock, 1000);
