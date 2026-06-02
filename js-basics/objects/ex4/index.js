const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true/false, // choose one
    fridge: {
        price: 500,
        works: true/false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const owner = kitchen.owner;
const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;
const itemName = kitchen.fridge.items[1].name;
const expiredDays = date - kitchen.fridge.items[1].expiryDate;
const repairPrice = kitchen.fridge.price / 2;

let text = owner + "'s " + itemName + " expired " + expiredDays + " day ago. ";

if (works) {
    text += "Weird, considering her fridge works. ";
} else {
    text += "Probably because her fridge doesn't work. ";
}

if (hasOven) {
    text += "Luckily, she has an oven to cook the " + itemName + " in.";
} else {
    text += "Too bad she doesn't have an oven to cook the " + itemName + " in.";
}

if (!works) {
    text += " And she'll have to pay " + repairPrice + " to fix the fridge.";
}

console.log(text);