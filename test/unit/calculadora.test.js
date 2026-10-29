const calculadora = require("../../models/calculadora.js");

test("A soma de 2 + 2 é igual a 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("A subtração de 5 - 3 é igual a 2", () => {
  const resultado = calculadora.subtrair(5, 3);
  expect(resultado).toBe(2);
});
