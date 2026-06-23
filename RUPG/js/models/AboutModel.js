class AboutModel {
  async fetchAbout() {
    const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&sentences=5');
    if (!response.ok) throw new Error('Failed to fetch about text');
    const data = await response.json();
    return data.join(' ');
  }
}
