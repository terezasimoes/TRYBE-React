// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, 


const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100 + 1);
module.exports = {retornaNumeroAleatorio};