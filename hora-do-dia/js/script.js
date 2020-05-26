window.addEventListener('load', start);

let message = null;
let img = null;
let data = new Date();
let hour = null;
let minute = null;

function start() {
  hour = data.getHours();
  minute = data.getMinutes().toString();
  message = document.querySelector('#message');
  img = document.querySelector('#image');

  changeHours(hour, minute);
}

function changeHours(newHour, newMinute) {
  let greeting = ' ';
  let minute = ' ';
  console.log(newHour);

  if (newHour > 6 && newHour < 12) {
    greeting = 'Bom dia!';
    image.src = '../img/manha.png';
    document.body.style.background = '#ffc039';
  } else if (newHour < 18) {
    greeting = 'Bom tarde!';
    image.src = '../img/tarde.png';
    document.body.style.background = '#239efc';
  } else {
    greeting = 'Boa noite!';
    image.src = '../img/noite.png';
    document.body.style.background = '#0d0d19';
  }

  if (newMinute.length == 1) {
    minute = '0' + newMinute;
  } else {
    minute = newMinute;
  }

  message.innerHTML = `${greeting} Agora são ${newHour}:${minute} horas`;
}
