const AutoCompleteTrie = require('./autoComplete');

describe('AutoCompleteTrie', () => {
    describe('addWord', () => {
        test('should add a word and mark the last character as endOfWord', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            expect(trie.children['c'].children['a'].children['t'].endOfWord).toBe(true);
        });

        test('should reuse existing nodes for words that share a prefix', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('car');
            trie.addWord('cat');
            const aNode = trie.children['c'].children['a'];
            expect(aNode.children['r']).toBeDefined();
            expect(aNode.children['t']).toBeDefined();
        });

        test('should not mark intermediate nodes as endOfWord', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('card');
            expect(trie.children['c'].endOfWord).toBe(false);
            expect(trie.children['c'].children['a'].endOfWord).toBe(false);
            expect(trie.children['c'].children['a'].children['r'].endOfWord).toBe(false);
            expect(trie.children['c'].children['a'].children['r'].children['d'].endOfWord).toBe(true);
        });
    });

    describe('findWord', () => {
        test('should return true for a word that exists in the trie', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            expect(trie.findWord('cat')).toBe(true);
        });

        test('should return false for a word that does not exist', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            expect(trie.findWord('dog')).toBe(false);
        });

        test('should return false for a prefix that is not a complete word', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            expect(trie.findWord('ca')).toBe(false);
        });
    });

    describe('_getRemainingTree', () => {
        test('should return the node where the prefix ends', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            const node = trie._getRemainingTree('ca', trie);
            expect(node.value).toBe('a');
        });

        test('should return null if prefix does not exist in the trie', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            const node = trie._getRemainingTree('dog', trie);
            expect(node).toBeNull();
        });

        test('should return root node if prefix is empty string', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            const node = trie._getRemainingTree('', trie);
            expect(node).toBe(trie);
        });
    });

    describe('_allWordsHelper', () => {
        test('should collect all words below a given node', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            trie.addWord('car');
            trie.addWord('card');
            const node = trie._getRemainingTree('ca', trie);
            const words = [];
            trie._allWordsHelper('ca', node, words);
            expect(words.map(w => w.word)).toContain('cat');
            expect(words.map(w => w.word)).toContain('car');
            expect(words.map(w => w.word)).toContain('card');
        });

        test('should not include incomplete words', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('card');
            const node = trie._getRemainingTree('ca', trie);
            const words = [];
            trie._allWordsHelper('ca', node, words);
            expect(words.map(w => w.word)).not.toContain('ca');
            expect(words.map(w => w.word)).not.toContain('car');
        });

        test('should return the word with frequency 0 by default', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            const node = trie._getRemainingTree('cat', trie);
            const words = [];
            trie._allWordsHelper('cat', node, words);
            expect(words).toEqual([{ word: 'cat', frequency: 0 }]);
        });
    });

    describe('predictWords', () => {
        test('should return all words that start with the given prefix', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            trie.addWord('car');
            trie.addWord('card');
            const words = trie.predictWords('ca').map(w => w.word);
            expect(words).toContain('cat');
            expect(words).toContain('car');
            expect(words).toContain('card');
        });

        test('should return empty array if prefix does not exist', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            expect(trie.predictWords('xy')).toEqual([]);
        });

        test('should return only the word itself if no extensions exist', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            expect(trie.predictWords('cat')).toEqual([{ word: 'cat', frequency: 0 }]);
        });

        test('should return exactly 5 words for prefix "ca"', () => {
            const trie = new AutoCompleteTrie('');
            ['cat', 'car', 'card', 'care', 'cave'].forEach(w => trie.addWord(w));
            expect(trie.predictWords('ca')).toHaveLength(5);
        });

        test('should not include words from a different prefix', () => {
            const trie = new AutoCompleteTrie('');
            ['cat', 'car', 'dog', 'door', 'done'].forEach(w => trie.addWord(w));
            const results = trie.predictWords('do');
            expect(results).toHaveLength(3);
            expect(results.map(w => w.word)).not.toContain('cat');
            expect(results.map(w => w.word)).not.toContain('car');
        });

        test('should return 1 word when only one match exists', () => {
            const trie = new AutoCompleteTrie('');
            ['cat', 'dog', 'bird'].forEach(w => trie.addWord(w));
            expect(trie.predictWords('bi')).toHaveLength(1);
            expect(trie.predictWords('bi')[0].word).toBe('bird');
        });

        test('should sort results by frequency descending', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            trie.addWord('car');
            trie.useWord('car');
            trie.useWord('car');
            trie.useWord('cat');
            const results = trie.predictWords('ca');
            expect(results[0].word).toBe('car');
            expect(results[0].frequency).toBe(2);
            expect(results[1].word).toBe('cat');
            expect(results[1].frequency).toBe(1);
        });
    });

    describe('useWord', () => {
        test('should increment frequency and return new count', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            expect(trie.useWord('cat')).toBe(1);
            expect(trie.useWord('cat')).toBe(2);
        });

        test('should return false for a word not in the trie', () => {
            const trie = new AutoCompleteTrie('');
            expect(trie.useWord('dog')).toBe(false);
        });

        test('should return false for a prefix that is not a complete word', () => {
            const trie = new AutoCompleteTrie('');
            trie.addWord('cat');
            expect(trie.useWord('ca')).toBe(false);
        });
    });
});
