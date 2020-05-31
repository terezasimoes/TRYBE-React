// Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
//  Para a segunda função, uma nova implementação deve retornar a última letra de uma string.
//   A terceira deve receber três strings e concatená-las.

const funcoes = require('./exercicio4');
jest.mock('./exercicio4'); // fazendo mock do arquivo

describe("testando implementações", () => {
    test("testando primeira função", () => {
        
        // mockando funçao para receber um parametro e retornar em caixa baixa
        funcoes.retornaCaixaAlta.mockImplementation(a => a.toLowerCase());

        expect(funcoes.retornaCaixaAlta('TEREZA')).toBe('tereza');
        expect(funcoes.retornaCaixaAlta).toHaveBeenCalled();
        expect(funcoes.retornaCaixaAlta).toHaveBeenCalledTimes(1);
        expect(funcoes.retornaCaixaAlta).toHaveBeenCalledWith('TEREZA')
    })

    test("testando segunda função", () =>{
        // mockando funcao para receber um parametro e retornar a ultima letra
        funcoes.retornaPrimLetra.mockImplementation(a => a.charAt(a.length - 1));

        expect(funcoes.retornaPrimLetra('tereza')).toBe('a');
        expect(funcoes.retornaPrimLetra).toHaveBeenCalled();
        expect(funcoes.retornaPrimLetra).toHaveBeenCalledTimes(1);
        expect(funcoes.retornaPrimLetra).toHaveBeenCalledWith('tereza') 
    })

    test("testando terceira função", () =>{
        // mockando funcao para receber 3 parametros e os concatena
        funcoes.juntaStr1eStr2.mockImplementation((a, b, c) => a.concat(b, c));

        expect(funcoes.juntaStr1eStr2('Te', 're', 'za')).toBe('Tereza');
        expect(funcoes.juntaStr1eStr2).toHaveBeenCalled();
        expect(funcoes.juntaStr1eStr2).toHaveBeenCalledTimes(1);
        expect(funcoes.juntaStr1eStr2).toHaveBeenCalledWith('Te', 're', 'za');
    })

})