window.addEventListener('load', function () {
  const timer = this.document.querySelector('#timer');
  let count = 0;

  const interval = this.setInterval(() => {
    timer.textContent = ++count;
    if (count === 60) {
      this.clearInterval(interval);
      return;
    }

    if (count % 5 === 0) {
      this.setTimeout(() => {
        timer.textContent = count + ',5';
      }, 500);
    }
  }, 1000);
});
