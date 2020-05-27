beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
 /*   
as linhas 1 e 2 valem pra todos os testes do arquivo
as linhas 7 e 8 valem apenas para os testes dentro do escopo do describe
então as linhas 1 e 2 valem para o da linha 10
*/

// 1-beforeEach
// 1-test
// 1-aftereEach
// 1-beforeEach
// 2-beforEach
// 2-test
// 2 - afeterEach
// 1 - afeterEach

// Pq depois da seguencia 1-beforeEach, 1-test, 1-afterEach? o 1-BeforeEach é impresso de novo?
// pq ele entra no bloco de teste do describe