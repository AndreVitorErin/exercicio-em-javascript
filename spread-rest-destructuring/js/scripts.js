window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );

  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  console.log(marriedMen);
  console.log(marriedWomen);

  const marriedPeolple = [...marriedMen, ...marriedWomen, { msg: 'oi' }];

  console.log(marriedPeolple);
}

function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 100));
  console.log(infiniteSum(1, 2, 4, 5, 6, 7, 8));
  console.log(infiniteSum(1, 2, 87, 96, 78, 49, 100));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
  const first = people.results[0];

  /*const username = first.login.username;
  const password = first.login.password;
  esse seria o método tradicional */

  //usando destructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}
