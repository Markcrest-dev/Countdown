const countDownDate = new Date("Mar 25, 2025 00:00:00").getTime();

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
      document.getElementById(id).innerHTML = '00';
    });
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = padNumber(days);
  document.getElementById("hours").innerHTML = padNumber(hours);
  document.getElementById("minutes").innerHTML = padNumber(minutes);
  document.getElementById("seconds").innerHTML = padNumber(seconds);
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();