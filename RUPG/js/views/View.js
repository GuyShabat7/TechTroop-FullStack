class View {
  constructor() {
    this.mainAvatar = document.getElementById('main-avatar');
    this.mainName = document.getElementById('main-name');
    this.mainLocation = document.getElementById('main-location');
    this.friendsList = document.getElementById('friends-list');
    this.pokemonImg = document.getElementById('pokemon-img');
    this.pokemonName = document.getElementById('pokemon-name');
    this.kanyeQuote = document.getElementById('kanye-quote');
    this.aboutText = document.getElementById('about-text');
    this.errorBanner = document.getElementById('error-banner');
    this.errorMessage = document.getElementById('error-message');
    this.generateBtn = document.getElementById('generate-btn');
  }

  renderMainUser(user) {
    this.mainAvatar.src = user.picture.large;
    this.mainAvatar.alt = `${user.name.first} ${user.name.last}`;
    this.mainName.textContent = `${user.name.first} ${user.name.last}`;
    this.mainLocation.textContent = `${user.location.city}, ${user.location.state}`;
  }

  renderFriends(friends) {
    this.friendsList.innerHTML = friends
      .map(f => `<li>${f.name.first} ${f.name.last}</li>`)
      .join('');
  }

  renderQuote(quote) {
    this.kanyeQuote.textContent = `"${quote}"`;
  }

  renderPokemon(pokemon) {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    this.pokemonImg.src = pokemon.image;
    this.pokemonImg.alt = name;
    this.pokemonName.textContent = name;
  }

  renderAbout(text) {
    this.aboutText.textContent = text;
  }

  showLoading() {
    this.generateBtn.textContent = 'Loading...';
    this.generateBtn.disabled = true;
  }

  hideLoading() {
    this.generateBtn.textContent = 'Generate New User';
    this.generateBtn.disabled = false;
  }

  showError(message) {
    this.errorMessage.textContent = message;
    this.errorBanner.classList.remove('hidden');
  }

  hideError() {
    this.errorBanner.classList.add('hidden');
  }
}
