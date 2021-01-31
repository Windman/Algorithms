const assert = require('chai').assert;

const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

const list = {
  head: undefined,
  tail: undefined,
  
  addNode: function(data) {
    const newNode = {
      next: undefined,
      prev: undefined,
      val: data
    }

    if (typeof this.head == "undefined") {
      this.tail = newNode;
      this.head = newNode;
      this.head.prev = undefined;
    } 

    newNode.prev = this.head;
    this.head.next = newNode;
    this.head = newNode;
    this.tail.prev = undefined;
  },

  toArrayFromTail(fromItem) {
    const listArray = [];
    let listItem = fromItem; 
    while(typeof listItem !== "undefined") {
      listArray.push(listItem.data);

      listItem = listItem.next;
    }

    return listArray;
  },

  printFromTailToHead(separator) {
    console.log(this.toArrayFromTail(this.tail).join(separator));
  },

  printFromHeadToTail(separator) {
   console.log(this.toArrayFromHead(this.head).join(separator));
  },

  printData: function() {
    let listItem = this.tail; 
    while(typeof listItem !== "undefined") {
      console.log(listItem.data);

      listItem = listItem.next;
    }
  },

  middleFromTail(tail) {
    let slow = tail;
    let fast = tail;

    while (typeof fast.next !==  "undefined") {
      slow = slow.next;
      fast = fast.next.next;

      if (typeof fast === "undefined"){
        return slow.val;
      }
    }

    return slow.val;
  },

  middleFromHead(head) {
    let slow = head;
    let fast = head;

    while (typeof fast.next !==  "undefined") {
      slow = slow.next;
      fast = fast.next.next;

      if (typeof fast === "undefined"){
        return slow.val;
      }
    }

    return slow.val;
  }
}

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

assert.equal(list.middleFromHead(list.head), 3);

list.addNode(6);

assert.equal(list.middleFromHead(list.head), 4);

list.printFromTailToHead(' -> ');
list.printFromHeadToTail(' -> ');