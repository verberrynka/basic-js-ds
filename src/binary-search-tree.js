const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (!node) {
         return new Node(data);
    }

    if (data < node.data) {
        node.left = this.addNode(node.left, data);
    } else if (data > node.data) {
        node.right = this.addNode(node.right, data);
    }

     return node;
  }

  has(data) {
    return Boolean(this.findNode(this.rootNode, data));
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (!node) {
        return null;
    }

    if (data === node.data) {
        return node;
    }

    if(data < node.data) {
      return this.findNode(node.left, data);
    }

    if (data > node.data) {
        return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (!node.left && !node.right) {
        return null;
    }

    if (!node.left) {
        return node.right;
    }

    if (!node.right) {
        return node.left;
    }

    const minRightNode = this.findMinNode(node.right);
    node.data = minRightNode.data;
    node.right = this.removeNode(node.right, minRightNode.data);

    return node;
  }

  findMinNode(node) {
    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  min() {
    let currentNode = this.rootNode;

    if (!currentNode) {
       return null;
    }

    while (currentNode.left) {
        currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;

    if (!currentNode) {
       return null;
    }

    while (currentNode.right) {
        currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};