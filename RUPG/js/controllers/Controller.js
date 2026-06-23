class Controller {
  constructor() {
    this.userModel = new UserModel();
    this.quoteModel = new QuoteModel();
    this.pokemonModel = new PokemonModel();
    this.aboutModel = new AboutModel();
    this.view = new View();
  }

  async generate() {
    this.view.showLoading();
    this.view.hideError();

    try {
      const [users, quote, pokemon, about] = await Promise.all([
        this.userModel.fetchUsers(),
        this.quoteModel.fetchQuote(),
        this.pokemonModel.fetchPokemon(),
        this.aboutModel.fetchAbout(),
      ]);

      const mainUser = users[0];
      const friends = users.slice(1);

      this.view.renderMainUser(mainUser);
      this.view.renderFriends(friends);
      this.view.renderQuote(quote);
      this.view.renderPokemon(pokemon);
      this.view.renderAbout(about);
    } catch (error) {
      this.view.showError(error.message);
    } finally {
      this.view.hideLoading();
    }
  }
}
