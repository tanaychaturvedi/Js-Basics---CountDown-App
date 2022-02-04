const countdown = () => {
  const countdate = new Date("February 9, 2022 00:00:00").getTime();

  const todaydate = new Date().getTime();
  const gap = countdate - todaydate;

  const seconds = 1000;
  const minutes = 60 * seconds;
  const hours = 60 * minutes;
  const days = 24 * hours;

  textDay = Math.floor(gap / days);
  textHour = Math.floor((gap % days) / hours);
  textMin = Math.floor((gap % hours) / minutes);
  textSec = Math.floor((gap % minutes) / seconds);
  console.log(textDay);
  console.log(textHour);
  console.log(textMin);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hours").innerText = textHour;
  document.querySelector(".minutes").innerText = textMin;
  document.querySelector(".seconds").innerText = textSec;
};

setInterval(countdown, 1000);
