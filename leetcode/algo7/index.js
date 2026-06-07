
// #7 
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false

function isAnagram(a, b) {
  // your code here
    if (a.length != b.length) {
        return false;
    }

    const charCount = new Map();

    for (let char of a) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let char of b) {
        if(!charCount.has(char) || charCount.get(char) === 0) {
            return false;
        }
        charCount.set(char, charCount.get(char - 1));
    }
    return true;


}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello",  "world"));
console.log(isAnagram("cat",    "car"));