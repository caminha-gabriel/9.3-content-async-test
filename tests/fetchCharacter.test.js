require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Tests if received character name is "Wonder Woman" when receives "720" string', async () => {
    const character = await fetchCharacter('720');
    const name = character.name;
    const expected = 'Wonder Woman';
    expect
    .assertions(1);
    expect(name)
    .toBe(expected);
  });

  it('Returns an error when receives no parameter', async () => {
    const response = await fetchCharacter();
    const error = new Error("You must provide an url");
    expect.assertions(1);
    expect(response)
    .toEqual(error);
  });

  it('Returns "Invalid id" when receives a strange parameter', async () => {
    const response = await fetchCharacter('estranho');
    expect
    .assertions(1);
    expect(response)
    .toBe('Invalid id');
  });

  it('Verify if fetch endpoint is correct', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect
    .assertions(2);
    expect(fetch)
    .toHaveBeenCalledTimes(4);
    expect(fetch)
    .toHaveBeenCalledWith(url);
  });
});