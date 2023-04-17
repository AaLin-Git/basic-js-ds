const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addTo(this.tree, data);
    function addTo(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addTo(node.left, data);
      } else {
        node.right = addTo(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return search(this.tree, data);
    function search(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
  }

  find(data) {
    let node = this.tree;
    while (node !== null) {
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return null;
  }

  remove(data) {
    this.tree = deleteNode(this.tree, data);
    function deleteNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = deleteNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.tree) {
      return;
    }
    let node = this.tree;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.tree) {
      return;
    }
    let node = this.tree;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree
};
