const funcaoDog = require('./exercicio6');

describe("testando a requisiçao", () => {
    funcaoDog.dogPictures = jest.fn();
    afterEach(funcaoDog.dogPictures.mockReset);
    // afterEach(() => funcaoDog.dogPictures.mockReset()); tb caberia

    test("testando requisiçao caso a promise resolva", async () => {
        funcaoDog.dogPictures.mockResolvedValue("request sucess")
        funcaoDog.dogPictures();
        expect(funcaoDog.dogPictures).toHaveBeenCalled();
        expect(funcaoDog.dogPictures).toHaveBeenCalledTimes(1);
        expect(funcaoDog.dogPictures()).resolves.toBe("request sucess");
        expect(funcaoDog.dogPictures).toHaveBeenCalledTimes(2);
    })

    test("testando requisiçao caso a promise rejeitada", async () => {
        funcaoDog.dogPictures.mockResolvedValue("request failed")
        
        
        expect(funcaoDog.dogPictures).toHaveBeenCalledTimes(0);
        expect(funcaoDog.dogPictures()).resolves.toBe("request failed");
        expect(funcaoDog.dogPictures).toHaveBeenCalledTimes(1);
    })


})

// O primeiro deve interpretar que a requisição se resolveu e teve como valor “request sucess”. 
// O segundo deve interpretar que a requisição falhou e ter como valor “request failed”. 
// Crie todos os testes que achar necessário.