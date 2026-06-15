const readline = require('readline');
const AutoCompleteTrie = require('./autoComplete');

const trie = new AutoCompleteTrie('');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showHelp() {
    console.log(`
Commands:
  add <word>            - Add word to dictionary
  find <word>           - Check if word exists
  complete <prefix>     - Get completions
  use <word>            - Increment usage count for a word
  help                  - Show this message
  exit                  - Quit program`);
}

function handleInput(input) {
    const [command, arg] = input.trim().split(' ');

    if (command === 'add') {
        trie.addWord(arg);
        console.log(`✓ Added '${arg}' to dictionary`);
    }
    else if (command === 'find') {
        if (trie.findWord(arg)) {
            console.log(`✓ '${arg}' exists in dictionary`);
        } else {
            console.log(`✗ '${arg}' not found in dictionary`);
        }
    }
    else if (command === 'complete') {
        const suggestions = trie.predictWords(arg);
        if (suggestions.length === 0) {
            console.log(`No suggestions for '${arg}'`);
        } else {
            const formatted = suggestions.map(s => `${s.word} (${s.frequency})`).join(', ');
            console.log(`Suggestions for '${arg}': ${formatted}`);
        }
    }
    else if (command === 'use') {
        const newCount = trie.useWord(arg);
        if (newCount === false) {
            console.log(`✗ '${arg}' not found in dictionary`);
        } else {
            console.log(`✓ Incremented usage for '${arg}' (now ${newCount})`);
        }
    }
    else if (command === 'help') {
        showHelp();
    }
    else if (command === 'exit') {
        console.log('Goodbye!');
        rl.close();
        return;
    }
    else {
        console.log(`Unknown command. Type 'help' for commands.`);
    }

    prompt();
}

function prompt() {
    rl.question('\n> ', handleInput);
}

console.log("=== AutoComplete Trie Console ===");
console.log("Type 'help' for commands");
prompt();
