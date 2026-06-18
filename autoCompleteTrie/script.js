const trie = new AutoCompleteTrie('');
let dictionarySize = 0;

const addWordInput = document.getElementById('addWordInput');
const addWordBtn = document.getElementById('addWordBtn');
const messageBox = document.getElementById('messageBox');
const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestionsBox');
const wordCountDisplay = document.getElementById('wordCount');

function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = type === 'error' ? 'message-error' : 'message-success';
    messageBox.style.display = 'block';
}

addWordBtn.addEventListener('click', () => {
    const word = addWordInput.value.trim().toLowerCase();
    
    if (word === '') {
        showMessage('✗ Cannot add empty word', 'error');
        return;
    }

    if (!trie.findWord(word)) {
        trie.addWord(word);
        dictionarySize++;
        wordCountDisplay.textContent = dictionarySize;
        showMessage(`✓ Added '${word}' to dictionary`, 'success');
    } else {
        showMessage(`✓ '${word}' is already in dictionary`, 'success');
    }

    addWordInput.value = '';
    handleSearch();
});

function handleSearch() {
    const prefix = searchInput.value.trim().toLowerCase();
    
    if (prefix === '') {
        suggestionsBox.style.display = 'none';
        return;
    }

    const suggestions = trie.predictWords(prefix);
    
    if (suggestions.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }

    suggestionsBox.innerHTML = '';
    
    suggestions.forEach(item => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        
        const highlightedPrefix = `<span class="highlight">${prefix}</span>`;
        const restOfWord = item.word.substring(prefix.length);
        
        div.innerHTML = highlightedPrefix + restOfWord;
        
        suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = 'block';
}

searchInput.addEventListener('input', handleSearch);

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.style.display = 'none';
    }
});

searchInput.addEventListener('focus', handleSearch);