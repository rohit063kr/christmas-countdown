setInterval(function(){
  const cur = Date.now();

  const curYear = new Date(cur).getFullYear();
  const christ = new Date(`25 december ${curYear}`);

  const christmasDate = cur > christ.getTime() ? new Date(`25 december ${curYear + 1}`) : new Date(`25 december ${curYear}`);

  const leftTime = christmasDate.getTime() - cur;

  const years = leftTime / (1000 * 60 * 60 * 24 * 30 * 12);
  const months = leftTime / (1000 * 60 * 60 * 24 * 30) % 12;
  const days = leftTime / (1000 * 60 * 60 * 24) % 30;
  const hours = leftTime / (1000 * 60 * 60) % 24;
  const minutes = leftTime / (1000 * 60) % 60;
  const seconds = leftTime / 1000 % 60;

  const yearEl = document.querySelector('#year');
  const monthEl = document.querySelector('#month');
  const dayEl = document.querySelector('#day');
  const hourEl = document.querySelector('#hour');
  const minuteEl = document.querySelector('#minute');
  const secondEl = document.querySelector('#second');

  yearEl.textContent = Math.trunc(years);
  monthEl.textContent = Math.trunc(months);
  dayEl.textContent = Math.trunc(days);
  hourEl.textContent = Math.trunc(hours);
  minuteEl.textContent = Math.trunc(minutes);
  secondEl.textContent = Math.trunc(seconds);
},1000);
