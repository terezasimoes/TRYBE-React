/* As Mock functions são ferramentas que nos permitem simular o comportamento de funções reais.
O objetivo de se mockar uma função, módulo ou requisição é permitir a quem desenvolve ter controle sobre todo o
funcionamento de seus testes.

No exemplo abaixo podemos ver um caso em que simular o comportamento da função seria necessário para o teste:*/

// const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

// test('quando o número aleatório é par, a função retorna `true`', () => {
//   expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
// })

/*
Mockar o comportamento da função retornaNumeroAleatorio() para garantir que ela está, nesse teste, retornando um número par, seria a solução pra esse impasse!

Dentre as principais formas de se mockar algo em Jest, destacam-se três:

jest.fn(); ==  configura-se como a forma mais simples de se mockar algo: ele transforma uma função em uma simulação;
Ou seja: ao mockar uma função com o jest.fn() e fazer a chamada da mesma, o comportamento definido no mock será chamado 
em vez da função original.

jest.mock();

jest.spyOn();
*/


// *****************  Mockando Funções **********************

// Fazendo o teste para saber se a função é chamada, temos:

// const service = require('./service');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

// Matcher error: received value must be a mock or spy function

// Esse erro acontece pois a propriedade toHaveBeenCalled, assim como outras que serão ensinadas a seguir, 
// são exclusivas para funções simuladas. Ou seja: se você não simula uma função, a propriedade não funciona corretamente.

const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui pois, 
  // para este teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
  service.randomRgbColor = jest.fn(); //  usando jest.fn() para testar a função(linhas34/40)

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});
