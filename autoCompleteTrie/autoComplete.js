class AutoCompleteTrie {
    constructor(value) {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
        this.frequency = 0;
    }

    addWord(word) {
        let curr = this;
        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new AutoCompleteTrie(char);
            }
            curr = curr.children[char];
        }
        curr.endOfWord = true;
    }

    findWord(word) {
        let curr = this;
        for (let char of word) {
            if (!curr.children[char]) return false;
            curr = curr.children[char];
        }
        return curr.endOfWord;
    }

    useWord(word) {
        let curr = this;
        for (let char of word) {
            if (!curr.children[char]) return false;
            curr = curr.children[char];
        }
        if (!curr.endOfWord) return false;
        curr.frequency++;
        return curr.frequency;
    }

    _getRemainingTree(prefix, node) {
        let curr = node;
        for (let char of prefix) {
            if (!curr.children[char]) return null;
            curr = curr.children[char];
        }
        return curr;
    }

    _allWordsHelper(prefix, node, allWords) {
        if (node.endOfWord) allWords.push({ word: prefix, frequency: node.frequency });
        for (let char in node.children) {
            this._allWordsHelper(prefix + char, node.children[char], allWords);
        }
    }

    predictWords(prefix) {
        const node = this._getRemainingTree(prefix, this);
        if (!node) return [];
        const allWords = [];
        this._allWordsHelper(prefix, node, allWords);
        return allWords.sort((a, b) => b.frequency - a.frequency);
    }
}