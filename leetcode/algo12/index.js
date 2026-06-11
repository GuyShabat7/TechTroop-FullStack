
// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")
// Input:  ""          →  Output: 0

function lengthOfLongestSubstring(str) {
  // your code here
    let map = new Map();
    let chars = str.split("");
    let max = 0;
    let len = 0;
    let ind = 0;       
    let ret = "";
    for (let char of chars) {
        if (!map.has(char) || map.get(char) < ind - len) {
            map.set(char, ind)
            len += 1;
        } else {
            len = ind - map.get(char);
            map.set(char, ind);
        }
        ind += 1;
        max = Math.max(max, len);
    }
    return max;
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb")); // → 3
console.log(lengthOfLongestSubstring("bbbbb"));    // → 1
console.log(lengthOfLongestSubstring("pwwkew"));   // → 3
console.log(lengthOfLongestSubstring(""));         // → 0
console.log(lengthOfLongestSubstring("acugmad"));   // → 3
console.log(lengthOfLongestSubstring("pwwwwmmfmsdms"));   // → 3
console.log(lengthOfLongestSubstring("pwwwwdaxfssadddsmmfmsdms"));   // → 3

