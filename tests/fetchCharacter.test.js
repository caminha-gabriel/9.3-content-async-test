require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Testa se o nome da personagem com id "720" é "Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    const name = character.name;
    const expected = 'Wonder Woman';
    expect.assertions(1);
    expect(name).toBe(expected);
  });

  it('Testa se a função retorna erro ao não receber parâmetros', async () => {
    const response = await fetchCharacter();
    const error = new Error("You must provide an url");
    expect.assertions(1);
    expect(response).toEqual(error);
  });
});