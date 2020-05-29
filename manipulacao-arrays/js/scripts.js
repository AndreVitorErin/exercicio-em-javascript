// método imutável é aquele que não altera diretamente o vetor original
window.addEventListener('load', () => {
  doMap(); // método imutável
  doFilter(); // método imutável
  doForEach(); // método mutável
  doReduce();
  doFind(); // traz apenas o primeiro resultado
  doSome(); // parecido com find, mas em vez de retornar o objeto, ele retorna verdadeiro ou falso
  doEvery();
  doSort();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);

  return nameEmailArray;
}

function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log(olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(totalAges);

  let sumAges = 0;
  for (let i = 0; i < people.results.length; i++) {
    var current = people.results[i];
    sumAges += current.dob.age;
  }
  console.log(sumAges); // o reduce substitui esse tipo de for
}

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  console.log(found);
}

function doSome() {
  const some = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });
  console.log(some);

  const some2 = people.results.some((person) => {
    return person.location.state === 'teste_false';
  });
  console.log(some2);
}

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });
  console.log(every);

  const every2 = people.results.every((person) => {
    return person.nat === 'US';
  });
  console.log(every2);
}

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return person.name.first;
    })
    .filter((person) => person.startsWith('A'))
    .sort(); // para ordenar por ordem alfabética

  console.log(mappedNames);

  const mappedNames2 = people.results
    .map((person) => {
      return { name: person.name.first };
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      return a.name.length - b.name.length;
    }); // para ordenar por número de caracteres

  console.log(mappedNames2);
}
