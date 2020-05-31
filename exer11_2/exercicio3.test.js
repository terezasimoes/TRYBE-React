// Ainda com a mesma função do primeiro exercício, utilizando o mock, cria uma nova implementação que receba 
// três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, 
// resete sua implementação e crie uma nova que recebe um parâmetro e retorne seu dobro. 
// Faça os testes necessários.

const service = require('./exercicio1');

describe("testando implementações", () => {
    test("testes", () => {
        // mockando função para receber 3 parâmetros e retornar sua multiplicação
        service.retornaNumeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);

        // recebendo parametros para testar seu retorno
        expect(service.retornaNumeroAleatorio(12, 5,3 )).toBe(180);
        // testando se a funçao foi chamada
        expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
        // testando qnts vezes foi chamada
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
        // testando com quais parametros foi chamada
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(12, 5, 3);
    })

    test("mockando funçao que recebe um parâmetro e retorna seu dobro", () => {
        service.retornaNumeroAleatorio.mockReset(); // resete sua implementação e crie uma nova que recebe um parâmetro e retorne seu dobro.
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(0);

        service.retornaNumeroAleatorio.mockImplementation(a => a * 2);

        expect(service.retornaNumeroAleatorio(3)).toBe(6);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(3);
    });
});