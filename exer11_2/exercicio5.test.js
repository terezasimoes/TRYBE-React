// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. 
// Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const funções = require('./exercicio4');
describe("testando implementações", () => {
    test("testando primeira função", () => {
        const primeirafuncao = jest.spyOn(funções, "retornaCaixaAlta")
                                   .mockImplementation(a => a.toLowerCase());
        // O jest.spyOn() “espia” a chamada da função simulada, enquanto deixa a implementação original ativa.

        expect(primeirafuncao('TEREZA')).toBe('tereza');
        expect(primeirafuncao).toHaveBeenCalled();
        expect(primeirafuncao).toHaveBeenCalledTimes(1);
        expect(primeirafuncao).toHaveBeenCalledWith('TEREZA')

        funções.retornaCaixaAlta.mockRestore();

        expect(funções.retornaCaixaAlta("tereza")).toBe('TEREZA');
    });
});

/* 
mock.mockClear()
Útil quando você deseja limpar os dados de uso de uma simulação entre dois expects;

mock.mockReset()
Faz o que o mockClear() faz;
Remove qualquer retorno estipulado ou implementação;
Útil quando você deseja resetar uma simulação para seu estado inicial;

mock.mockRestore()
Faz tudo que mockReset() faz;
Restaura a implementação original;
Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;
*/