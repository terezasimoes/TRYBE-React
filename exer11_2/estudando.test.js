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

jest.mock(); == “espia” a chamada da função simulada, enquanto deixa a implementação original ativa.

jest.spyOn();
*/


// *****************  Mockando Funções **********************

// 1- Fazendo o teste para saber se a função é chamada, temos:

// const service = require('./service');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

// Matcher error: received value must be a mock or spy function

// Esse erro acontece pois a propriedade toHaveBeenCalled, assim como outras que serão ensinadas a seguir, 
// são exclusivas para funções simuladas. Ou seja: se você não simula uma função, a propriedade não funciona corretamente.

/* 2 **
const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui pois, 
  // para este teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
  service.randomRgbColor = jest.fn(); //  usando jest.fn() para testar a função(linhas34/40)

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

Ao declarar service.randomRgbColor = jest.fn(); estamos dizendo ao teste que, a partir daquele momento, 
estamos tomando controle da função service.randomRgbColor e que ela será uma simulação da função original.
*/

// 3 ***
// Por ser uma simulação, podemos especificar qual vai ser o retorno da função. Basicamente, o que podemos dizer é:
//  “No contexto deste teste, quando essa função for chamada, ela retornará o valor que eu defini, 
//  ao invés de um valor aleatório!”. Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value)
//   e mockReturnValueOnce(value). O mockReturnValue define um valor padrão de retorno. 
//   Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante pois pode ser encadeado para que 
//   chamadas sucessivas retornem valores diferentes.


const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada e qual seu retorno
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");
    // estamos manualmente chamando a função service.randomRgbColor();. 
    // Caso isso não seja feito, o teste expect(service.randomRgbColor).toHaveBeenCalled() irá falhar
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});

// Isso acontece porque mockar uma função redefine seu comportamento, 
// mas não a executa. A propriedade toHaveBeenCalled() 
// espera que a função dentro do expect tenha sido executada
//  por alguma chamada anterior a essa linha dentro do contexto deste teste.



// 4 - testar quantas vezes a funçao foi chamada  usando toHaveBeenCalledTimes(number);

// const service = require('./service');

// test("#randomRgbColor", () => {
//   // testando quantas vezes a função foi chamada e qual seu retorno
//   service.randomRgbColor = jest
//     .fn()
//     .mockReturnValue('default value')
//     .mockReturnValueOnce('first call')
//     .mockReturnValueOnce('second call');

//   expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

//   expect(service.randomRgbColor()).toBe("first call");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

//   expect(service.randomRgbColor()).toBe("second call");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

//   expect(service.randomRgbColor()).toBe("default value");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
// });


// ----------------------- * ------------------------

// Mockando Módulos

// Diferente do jest.fn(), que simula apenas uma função por vez, temos o jest.mock(), 
// que tem como principal diferencial mockar todo um pacote de dependências ou módulo de uma vez.

// Por exemplo: em um arquivo chamado math.js temos as seguintes funções:
/*
const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };
*/

//Utilizando o jest.fn(), teríamos que mockar todas as funções uma a uma. Com o jest.mock(), podemos mockar todas com um só comando:
//jest.mock(‘./math’);

// Uma vez que mockarmos todo o arquivo math.js e, portanto, passemos a simular o comportamento de todas as suas funções, 
// caso passemos os parâmetros 1 e 2 para a função somar, por exemplo, o retorno será “undefined”. Isso se dá pois a simulação deixou 
// de acessar o comportamento da função original do math.js. Apesar de podermos definir um retorno com mockReturnValue, 
// há casos em que é útil ir além dessa capacidade de retornar valores e criar um novo comportamento para a função simulada. 
// É o que o método mockImplementation(func) faz. Ele aceita uma função que deve ser usada como implementação.


//Veja um exemplo:
const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  // método toHaveBeenCalledWith(...args), que valida quais parâmetros foram passados para a função.
  expect(math.somar(1, 2)).toBe(3);
});


// --------------------------------- jest.spyOn() ----------------------------------------------------

// O jest.spyOn() é capaz de resolver esse problema. Ele “espia” a chamada da função simulada, 
// enquanto deixa a implementação original ativa.
// Podemos notar no exemplo que a simulação da função é criada, mas sua implementação é mantida e a soma realizada.

//const math = require('./math');

// test("#somar", () => {
//   // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
//   const mockSomar = jest.spyOn(math, "somar");

//   math.somar(1, 2);
//   expect(mockSomar).toHaveBeenCalled();
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar).toHaveBeenCalledWith(1, 2);
//   expect(mockSomar(1, 2)).toBe(3);
// });
