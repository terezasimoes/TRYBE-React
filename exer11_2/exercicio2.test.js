// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação que deve receber dois parâmetros e
// retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. 
// Faça os testes necessários.


const service = require('./exercicio1');
test("testando", () => {
// crie uma nova implementação que deve receber dois parâmetros retornar a divisão do primeiro pelo segundo.
service.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b); // implementa apenas uma vez
// recebendo os parâmetros para testar qual seu retorno
expect(service.retornaNumeroAleatorio(50, 5)).toBe(10);
// testando se a funçao foi chamada
expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
// testando qnts vezes a fn foi chamada e com quais parâmetros(linhas 15 3 16)
expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(50, 5);
})