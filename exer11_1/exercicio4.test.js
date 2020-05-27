const getRepos = require('./exercicio4');
/* 
O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e
retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os 
repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
*/

test("testa se existe repositório no retorno de getRepos", async() => {
    expect.assertions(2);
    const repos = await getRepos('https://api.github.com/users/tryber/repos');
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
});