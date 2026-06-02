const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
];

const capitalize = function(str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase();
  capitalizedStr += str.slice(1);
  return capitalizedStr;
};

const getAge = function(age) {
  if (age < 21) {
    return "an Underage";
  } else if (age > 55) {
    return "a 55+";
  } else {
    return `a ${age} year old`;
  }
};

const capitalizeName = function(name) {
  return capitalize(name);
};

const capitalizeProfession = function(profession) {
  const words = profession.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  return words.join(" ");
};

const capitalizeCity = function(city) {
  return capitalize(city);
};

const capitalizeCountry = function(country) {
  return capitalize(country);
};

const capitalizeCatchphrase = function(catchphrase) {
  return capitalize(catchphrase);
};

const getSummary = function(person) {
  let summary = "";
  summary += capitalizeName(person.name);
  summary += ` is ${getAge(person.age)} `;
  summary += capitalizeProfession(person.profession);
  summary += " from " + capitalizeCity(person.city) + ", " + capitalizeCountry(person.country) + ". ";
  summary += capitalizeName(person.name) + ' loves to say "' + capitalizeCatchphrase(person.catchphrase) + '".';
  return summary;
};

for (let i = 0; i < people_info.length; i++) {
  console.log(getSummary(people_info[i]));
}