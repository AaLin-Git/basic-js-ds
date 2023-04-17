const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = addTo(this.root, data);

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
    return BinarySearchTree(this.root, data);
    function search(node, data) {
      if(!node)  return false;
      if(node.data === data) return true;

      if( data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
  }

  find(data) {
    let node = this.root;

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
    this.root = removeNode(this.root, data);
    function removeNode(node, data) {
      if (!node) return null;
      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.lef;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while(node.right) {
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
