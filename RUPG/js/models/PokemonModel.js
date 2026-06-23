class PokemonModel {
  async fetchPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    if (!response.ok) throw new Error('Failed to fetch pokemon');
    const data = await response.json();
    return {
      name: data.name,
      image: data.sprites.front_default,
    };
  }
}
