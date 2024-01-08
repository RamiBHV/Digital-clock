const hourEl = document.getElementById("hour");
const minuteEL = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");

function updateClock()
{
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12)
  {
    ampm = "PM";
  }

  if(h < 10)
  {
    h = "0" + h;
  }

  hourEl.innerText = h;
  minuteEL.innerText = m;
  secondEl.innerText = s;
  ampmEL.innerText =ampm;
}

updateClock();
setInterval(updateClock, 1000)