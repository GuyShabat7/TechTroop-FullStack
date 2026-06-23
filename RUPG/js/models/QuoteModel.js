class QuoteModel {
  async fetchQuote() {
    const response = await fetch('https://api.kanye.rest/');
    if (!response.ok) throw new Error('Failed to fetch quote');
    const data = await response.json();
    return data.quote;
  }
}
