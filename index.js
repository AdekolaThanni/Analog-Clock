// DOM elements
const clock = $('.clock');
const second = $(".hand-second");
const minute = $(".hand-minute");
const hour = $(".hand-hour");

setInterval(() => {
  // Get current time
  const now = new Date();
  const currentSeconds = now.getSeconds();
  const currentMinutes = now.getMinutes();
  const currentHours = now.getHours() % 12;

  // Compute angle
  const secondAngle = position => (position/60) * 360;
  const minuteAngle = position => ((position/60) * 360) + ((currentSeconds/60) * 5);
  const hourAngle = position => ((position/12) * 360) + ((currentMinutes/60) * 30);

  // Display angle
  second.css("transform", `translate(-50%, -15%) skewY(-1.5deg) rotate(${secondAngle(currentSeconds)}deg)`);
  minute.css("transform", `translate(-50%, -15%) skewY(-1.5deg) rotate(${minuteAngle(currentMinutes)}deg)`);
  hour.css("transform", `translate(-50%, -15%) skewY(-1.5deg) rotate(${hourAngle(currentHours)}deg)`);

  // Display Clock
  clock.css("opacity", "1");
}, 1000);
