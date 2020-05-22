function sum (a, b){
  return a + b;
}

console.log(sum(1, 3))

function compareNumbers(a, b){
  // return a > b ? 1 : a < b ? -1 : 0; -> um dos modos de escrever, assim sempre retornará valores fixos
  return a - b // assim retorna zero para número igual, número negativos quando a < b e números positivos quando a > b
}
console.log(compareNumbers(1, 1))
console.log(compareNumbers(1, 0));
console.log(compareNumbers(0, 1));

function superSum(from, upTo) {
  var sum = 0;

  for (var i = from; i <= upTo; i++){
    sum +=i
  }  
  return sum;
}

console.log(superSum(1, 10));
console.log(superSum(9, 100));
console.log(superSum(200, 1000));