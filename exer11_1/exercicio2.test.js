/* 
2- Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso 
em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users para saber quais IDs existem.

3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

Dica: Utilize o try/catch para o caso de erro.
*/

const getUserName = require('./exercicio2');

//-------- SE O USUÁRIO FOR ENCONTRADO 

// usando .then e .catch
test("getUserName", () => {
    expect.assertions(1); // Agora adicione o .then para pegar o resultado
    return (getUserName(4)).then(name => expect(name).toBe('Mark'));
    // tenho que retornar para o jest saber que é uma promisse
    // em seguida, adicionar a quantidade de expect esperadas por meio do comando expect.assertions().
});

// teste usuario não encontrado
test("getUserName", () => {
    expect.assertions(1);
    return (getUserName(2)).catch(error => expect(error).toEqual({ error : 'User with 6 not found'}));
})


// usando .resolves e . rejects
test("getUserName", () => {
    expect.assertions(1);
    return (getUserName(4)).resolves.toBe("Mark");
});

test("getUserName", () => {
    expect.assertions(1);
    return (getUserName(2)).rejects.toEqual({error : 'Uder with 6 not found'});
});

