class UniqueArray {
    constructor() {
        this.stuff = [];
        this.seen = new Set();
    }
    
    add(s) {
        if(!this.seen.has(s)) {
            this.seen.add(s);
            this.stuff.push(s);
        }
    }

    showAll() {
        console.log(this.stuff);
    }

    exists(s) {
        return this.seen.has(s);
    }

    get(i) {
        if (i >= 0 && i < this.stuff.length) {
            return this.stuff[i];
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