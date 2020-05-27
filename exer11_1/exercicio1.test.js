// Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as 
// letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado 
// com os falso-positivos em testes assíncronos.

const uppercase = require('./exercicio1');

test("uppercase 'superar' to equal 'SUPERAR'", (done) => {
    expect.assertions(1); // espera uma verificaçao 
    
    const callback = (str) => {
        expect(str).toBe("SUPERAR");
        done();
    }
    
    uppercase("superar", callback);
});
/*o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, 
dado o final do teste, gera um resultado positivo antes de um eventual 
problema numa função assíncrona acusar um erro.

O Jest não espera o test acabar, gerando esse resultado falso-positivo.

Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback
 própria da biblioteca chamada done, que precisa ser chamada após os testes assíncronos.*/