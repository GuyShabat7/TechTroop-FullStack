class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(value) {
        if (this.value === value) {
            return true;
        }
        else if (value > this.value && this.rightChild) {
            return this.rightChild.findNode(value);
        }
        else if (value <= this.value && this.leftChild) {
            return this.leftChild.findNode(value);
        }
        else {
            return false;
        }
    }
}

const letters = ["H", "E", "S", "G", "L", "Y", "I"];
const bsTree = new BSNode(letters[0]);
letters.slice(1).forEach(l => bsTree.insertNode(l));

console.log(bsTree.findNode("H")); 
console.log(bsTree.findNode("G")); 
console.log(bsTree.findNode("Z")); 
console.log(bsTree.findNode("F")); 
console.log(bsTree.findNode("y")); 
