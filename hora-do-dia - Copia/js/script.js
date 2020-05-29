window.addEventListener('load', start);

let date = new Date();
let year = date.getFullYear();

let result = null;
let bornYear = null;
let button = null;
let gender = null;
let radSex = null;
let ageRange = null;

function start() {
  bornYear = document.querySelector('#inputYear');
  result = document.querySelector('#res');
  button = document.querySelector('#button');
  radSex = document.getElementsByName('radSex');

  button.addEventListener('click', verify);
  render();
}

function verify() {
  let bornYear = inputBornYear.value;
  let age = year - bornYear;
  let img = document.createElement('img');
  result.style.textAlign = 'centro';
  result.innerHTML = `Você tem ${age}, é ${ageRange} anos e é ${gender}`;

  if (bornYear == 0 || bornYear > year) {
    window.alert('[ERRO] <br>Revise os dados e tente novamente');
  }

  if (inputRadSex[0].checked) {
    gender = 'homem';
    if (age < 10) {
      img.setAttribute('src', '../img/h-crianca.png');
      ageRange = 'criança';
    } else if (age < 25) {
      img.setAttribute('src', '../img/h-jovem.pgn');
      ageRange = 'jovem';
    } else if (age < 35) {
      img.setAttribute('src', '../img/h-adulto.pgn');
      ageRange = 'adulto';
    } else {
      img.setAttribute('src', '../img/h-idoso.pgn');
      ageRange = 'idoso';
    }
  } else if (inputRadSex[1].checked) {
    gender = 'mulher';
  } else {
    gender = 'uma pessoa não-binária ou agênera';
  }

  render();
}

function render() {
  inputRadSex.value = radsex;
  inputBornYear.value = bornYear;
}
