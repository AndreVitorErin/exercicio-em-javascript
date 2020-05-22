window.addEventListener('load', start); // estamos indicando para o JS que "quando a página carregar, execute a função start"

function start() {
  console.log('Página totalmente carregada');

  var nameInput = document.querySelector('#input-nome');
  nameInput.addEventListener('keyup', countName);  

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit)
}

function countName(event) {
  console.log(event);
  var count = event.target.value;
  var span = document.querySelector('#nameLength');
  span.textContent = count.length;  
}

function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.querySelector('#input-nome');alert(nameInput.value + ' cadastrado com sucesso!')
}

