class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertLeft(value) {
        if (!this.leftChild) {
            this.leftChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        }
    }

    insertRight(value) {
        if (!this.rightChild) {
            this.rightChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        }
    }
}

let tree = new Node(3);
tree.insertLeft(1);
tree.insertRight(5);
tree.insertLeft(2);
console.log(JSON.stringify(tree, null, 2));
