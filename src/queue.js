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
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    if (this.length === 0) {
      return null;
    }

    let currentListNode = this.head;
    let resultHead = null;
    let resultCurrent = null;

    while (currentListNode) {
      const plainObjectNode = { value: currentListNode.value, next: null };

      if (!resultHead) {
        resultHead = plainObjectNode;
        resultCurrent = resultHead;
      } else {
        resultCurrent.next = plainObjectNode;
        resultCurrent = plainObjectNode;
      }
      currentListNode = currentListNode.next;
    }

    return resultHead;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }

    const valueToRemove = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return valueToRemove;
  }
}

module.exports = {
  Queue
};