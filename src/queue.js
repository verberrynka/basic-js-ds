const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.elements = [];
  }

  getUnderlyingList() {
    if (this.elements.length === 0) {
      return null;
    }
    let head = null;
    let current = null;

    for (const value of this.elements) {
        const newNode = new ListNode(value);
        if (!head) {
            head = newNode;
            current = head;
        } else {
            current.next = newNode;
            current = newNode;
        }
    }

    return head;
  }

  enqueue(value) {
    this.elements.push(value);
  }

  dequeue() {
    return this.elements.shift();
  }
}

module.exports = {
  Queue
};
