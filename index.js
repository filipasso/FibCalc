const { argv, exit } = require("process");
const path = require("path");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fib(n) {
  var F = [
    [1, 1],
    [1, 0],
  ];
  if (n == 0) return 0;
  power(F, n - 1);
  return F[0][0];
}
function multiply(F, M) {
  x = F[0][0] * M[0][0] + F[0][1] * M[1][0];
  y = F[0][0] * M[0][1] + F[0][1] * M[1][1];
  z = F[1][0] * M[0][0] + F[1][1] * M[1][0];
  w = F[1][0] * M[0][1] + F[1][1] * M[1][1];
  F[0][0] = x;
  F[0][1] = y;
  F[1][0] = z;
  F[1][1] = w;
}
function power(F, n) {
  var i;
  var M = [
    [1, 1],
    [1, 0],
  ];
  for (i = 2; i <= n; i++) multiply(F, M);
}

const result = (input) =>
  console.log(`
Wynik obliczeń dla n = ${input}: ${fib(input)}
Nazwa programu: ${path.basename(argv[1])}
Autor: Filip Piskorski
Grupa dziekańska: 1.3
`);

readline.question(
  "Podaj liczbę z zakresu liczb całkowitych od 1 do N :\n-> ",
  (number) => {
    result(number);
    readline.close();
    exit(0);
  }
);
