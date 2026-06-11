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

    removeNode(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.leftChild = this.removeNode(node.leftChild, value);
        }
        else if (value > node.value) {
            node.rightChild = this.removeNode(node.rightChild, value);
        }
        else {
            if (!node.leftChild && !node.rightChild) {
                return null;
            }
            if (!node.leftChild) return node.rightChild;
            if (!node.rightChild) return node.leftChild;

            let maxLeft = node.leftChild;
            while (maxLeft.rightChild) {
                maxLeft = maxLeft.rightChild;
            }
            node.value = maxLeft.value;
            node.leftChild = this.removeNode(node.leftChild, maxLeft.value);
        }

        return node;
    }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(JSON.stringify(nodeWithOneChild.removeNode(nodeWithOneChild, 9), null, 2));

let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(JSON.stringify(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8), null, 2));
