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
      data: data
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

  toArrayFromHead(fromItem) {
    const listArray = [];
    let listItem = fromItem; 
    
    while(typeof listItem !== "undefined") {
      listArray.push(listItem.data);

      listItem = listItem.prev;
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
  }
}

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);

list.printFromTailToHead(' -> ');
list.printFromHeadToTail(' -> ');