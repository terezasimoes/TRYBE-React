const getUserName = require('/.exercicio2');

// testando usuário encontrado

// com async await no lugar da promise
test("usuário é encontrado", async() => {
    expect.assertions(1);
    const name = await getUserName(5);
    expect(name).toBe("Paul");
});

// async await junto com resolves.

test("usuário é encontrado", async () => {
    expect.assertions(1);
    await expect(getUserName(5)).resolves.toBe("Paul");
})


// testando usuário não encontrado 

// com async await no lugar da promise
test("usuário não é encontrado", async () => {
    expect.assertions(1);
    try{
        await getUserName(6);
    }catch(error) {
        expect(error).toEqual({error: 'User with 6 not found'})
    };
})

// com async await junto com .rejects
test("usuário não encontrado", async () => {
    expect.assertions(1);
    await expect(getUserName(6).reject.toEqual({error: 'User with 6 not found'}));
})