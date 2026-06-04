const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 8 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },

  makeDrink: function (drinkType) {
    if (!this.drinkRequirements[drinkType]) {
      console.log("Sorry, we don't make " + drinkType);
      return false; 
    }

    if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return false;
    }

    this.beans -= this.drinkRequirements[drinkType].beanRequirement;
    return true;
  },

  buyBeans: function (numBeans) {
    const costPerBean = 0.5;
    const totalCost = numBeans * costPerBean;

    if (this.money >= totalCost) {
      this.money -= totalCost;
      this.beans += numBeans;
      console.log(`Bought ${numBeans} beans. Remaining money: $${this.money}`);
    } else {
      console.log("Not enough money to buy beans!");
    }
  },
  buyDrink: function (drinkType) {
    const drinkMade = this.makeDrink(drinkType);
    
    if (drinkMade) {
      this.money += this.drinkRequirements[drinkType].price;
      console.log(`Sold a ${drinkType}. Total money: $${this.money}`);
    }
  }
};



coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); 
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.buyBeans(20); 
coffeeShop.buyDrink("frenchPress");