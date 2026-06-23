class Controller {
  constructor() {
    this.userModel = new UserModel();
    this.quoteModel = new QuoteModel();
    this.pokemonModel = new PokemonModel();
    this.aboutModel = new AboutModel();
    this.view = new View();
    this.currentSnapshot = null;
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

      this.currentSnapshot = { mainUser, friends, quote, pokemon, about };

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

  saveUser() {
    if (!this.currentSnapshot) return;

    const name = `${this.currentSnapshot.mainUser.name.first} ${this.currentSnapshot.mainUser.name.last}`;
    const saved = JSON.parse(localStorage.getItem('rupg_users') || '{}');
    saved[name] = this.currentSnapshot;
    localStorage.setItem('rupg_users', JSON.stringify(saved));

    this.view.renderDropdown(Object.keys(saved));
  }

  loadUser() {
    const saved = JSON.parse(localStorage.getItem('rupg_users') || '{}');
    const name = this.view.getSelectedUser();
    const snapshot = saved[name];

    if (!snapshot) return;

    this.currentSnapshot = snapshot;
    this.view.renderMainUser(snapshot.mainUser);
    this.view.renderFriends(snapshot.friends);
    this.view.renderQuote(snapshot.quote);
    this.view.renderPokemon(snapshot.pokemon);
    this.view.renderAbout(snapshot.about);
  }

  loadSavedNames() {
    const saved = JSON.parse(localStorage.getItem('rupg_users') || '{}');
    this.view.renderDropdown(Object.keys(saved));
  }
}
