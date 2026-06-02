const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const cleanText = function(sentence) {
  let cleanedSentence = sentence.toLowerCase();
  
  for (let i = 0; i < specialChars.length; i++) {
    cleanedSentence = cleanedSentence.split(specialChars[i]).join("");
  }
  
  return cleanedSentence.split(" ");
};

const addToCounter = function(word) {
  if (wordCounts[word]) {
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }
};

const countWords = function(sentence) {
  const words = cleanText(sentence);
  
  for (let i = 0; i < words.length; i++) {
    addToCounter(words[i]);
  }
};

countWords(story);
console.log(wordCounts);