var title = document.querySelector('h1');
title.textContent = 'Alterando o Título';

var city = document.querySelector('#cidade');
city.textContent = 'São Paulo - SP';

var personalDataArray = document.querySelectorAll('.personal-data'); // após esse comando, retorna uma NodeList

personalDataArray = Array.from(personalDataArray); // após esse comando, em que a variável é mutável, retorna um vetor e não mais uma NodeList

/* dá pra fazer esse dois comandos em uma única linha, ele fica:
var personalDataArray = Array.from(document.querySelectorAll('.data'))*/

for(var i = 0; i < personalDataArray.length; i++){
  var currentElement = personalDataArray[i];
  currentElement.classList.add('emphasis')
  /* daria para manipular diretamente o CSS pelo código:
  currentElement.style.color = 'green'; */
}

/*quando solicitamos mudança de cor em um elemento que contém um link, o link não será alterado pois ele tem precedência na cor, é necessário um outro comando para alterar a cor do link, portanto.*/
