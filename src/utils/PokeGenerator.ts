/** Class for generating random pokémons using PokeApi */
export default class PokeGenerator {
  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonNumber = 898;

  /**
   * Generates a random number between 1 and total number of pokémons.
   * @returns {number} The id (number) of the pokémon
   */
  private generatePokemonId(): number {
    const pokemonId: number = Math.floor(
      Math.random() * this.pokemonNumber + 1
    );

    return pokemonId;
  }

  /**
   * Retrieves the name of a random pokémon from PokeApi.
   * @returns {Promise<string | undefined>} The name of the pokémon.
   */
  async getRandomPokemon(): Promise<string | undefined> {
    let pokemon: string | undefined;
    const pokemonId: number = this.generatePokemonId();

    await fetch(this.pokeUrl + pokemonId)
      .then((res) => res.json())
      .then((data) => {
        pokemon = data.name;
      });

    return pokemon;
  }
}
