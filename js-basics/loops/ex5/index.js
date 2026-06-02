const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
};

for (let key in dictionary) {
  console.log("Words that begin with " + key + ":");
  
  const words = dictionary[key];
  for (let j = 0; j < words.length; j++) {
    console.log("    " + words[j]);
  }
}

