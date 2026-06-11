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

    findCommonParent(val1, val2) {
        if (val1 < this.value && val2 < this.value) {
            return this.leftChild.findCommonParent(val1, val2);
        }
        else if (val1 > this.value && val2 > this.value) {
            return this.rightChild.findCommonParent(val1, val2);
        }
        else {
            return this.value;
        }
    }
}

const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
const bsTree = new BSNode(letters[0]);
letters.slice(1).forEach(l => bsTree.insertNode(l));

console.log(bsTree.findCommonParent("B", "I")); // H
console.log(bsTree.findCommonParent("B", "G")); // E
console.log(bsTree.findCommonParent("B", "L")); // J
console.log(bsTree.findCommonParent("L", "Y")); // R
console.log(bsTree.findCommonParent("E", "H")); // J
