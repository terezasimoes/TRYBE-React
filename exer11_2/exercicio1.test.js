const service = require('./exercicio1');

// defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
test("testando se retornoNumeroAleatório foi chamada", () => {

    service.retornaNumeroAleatorio = jest.fn().mockReturnValue(10); // tomando o controle da funçao com o jest.fn() e especificando 
    // o valor que eu definir com a propriedade .mockReturnValue(value);
    expect(service.retornaNumeroAleatorio()).toBe(10); 
    expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
    expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
})
// na linha 6 estou manualmente chamando a funçao service.retornaNumeroAleatorio(). SE ISSO NÃO FOR FEITO
// o teste da linha 9, expect(service.retornaNumeroAleatorio).toHaveBeenCalled() irá falhar
// pq mockar uma função redefine seu comportamento mas não a executa