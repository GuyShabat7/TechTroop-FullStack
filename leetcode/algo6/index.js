// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
// Input:  "the quick brown fox"   →  Output: "quick"
// Input:  "cat elephant dog"      →  Output: "elephant"
// Input:  "one two six ten"       →  Output: "one"  (tie → first wins)

function longestWord(str) {
  // your code here
    const wordsList = str.split(" ");
    let longestWord = wordsList[0];
    for (let word of wordsList) {
        if (word.length > longestWord) longestWord = word;
    }
    return longestWord;
}

console.log(longestWord("guy"));