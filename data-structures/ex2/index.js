class UniqueArray {
  constructor() {
    this.items = [];
    this.seen = new Set();
  }

  add(item) {
    const stringified = JSON.stringify(item);
    if (!this.seen.has(stringified)) {
      this.seen.add(stringified);
      this.items.push(item);
    }
  }

  showAll() {
    console.log(this.items);
  }

  exists(item) {
    const stringified = JSON.stringify(item);
    return this.seen.has(stringified);
  }

  get(index) {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return -1;
  }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"