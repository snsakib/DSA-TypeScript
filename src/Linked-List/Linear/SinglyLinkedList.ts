import { Node } from "../../Node";

export class SinglyLinkedList<T> {
  private _head: Node<T> | null;
  private _tail: Node<T> | null;
  private _length: number;

  constructor(data: T) {
    this._head = new Node(data);
    this._tail = this._head;
    this._length = 1;
  }

  public get head(): T | null {
    return this._head ? this._head.data : null;
  }

  public get tail(): T | null {
    return this._tail ? this._tail.data : null;
  }

  // Return the size of the Linked-List
  // Complexity: O(1)
  get length(): number {
    return this._length;
  }

  private incLength(): number {
    return this._length++;
  }

  private decLength(): number {
    if (this._length === 0) {
      return 0;
    } else {
      return this._length--;
    }
  }

  // Insert data into tail
  // Complexity: O(1)
  public push(data: T): Node<T> {
    const node = new Node(data);
    // If LinkedList is empty
    if (!this._tail) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this.incLength();
    return this._tail;
  }

  // Remove Node from the tail
  // Complexity: O(n)
  public pop(): Node<T> | null {
    let pointer = this._head;
    let oldTail = this._tail;

    // If Linked-List is empty
    if (this.length === 0) {
      return this._tail;
    }

    // If Linked-List has only one item
    if (this.length === 1) {
      this._head = null;
      this._tail = null;
    }

    // If Linked-List has more than one item
    // loop through the linked-list
    // find the node previous to the current-tail & make it the new-tail
    // remove & return the current-tail
    if (this.length > 1) {
      while (pointer?.next !== this._tail) {
        pointer = pointer.next;
      }

      pointer.next = null;
      this._tail = pointer;
    }

    this.decLength();

    return oldTail;
  }

  // Insert node from the head
  // Complexity: O(1)
  public unshift(data: T): T | null {
    const node = new Node(data);
    // If the Linked-List is empty
    if (this.length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      // Point the new node to the head node
      // move the head pointer to the new node
      node.next = this._head;
      this._head = node;
    }

    this.incLength();
    return this.head;
  }

  // Remove node from the head
  // Complexity: O(1)
  public shift(): Node<T> | null {
    const node = this._head;

    // If the Linked-List is empty
    if (!this._head) {
      return null;
    }

    // If the Linked-List has one element
    if (this.length === 1) {
      this._head = null;
      this._tail = null;
    }

    // If the Linked-List has more than one element
    // move the head pointer to the next node
    // point the old head to null
    if (this.length > 1) {
      this._head = this._head.next;
      node.next = null;
    }

    this.decLength();
    return node;
  }

  // Return the desired index value
  // Complexity: O(n)
  public get(index: number): T | null {
    let pointer = this._head;

    // If index is greater than length
    // or negative number
    if (index >= this.length || index < 0) {
      return null;
    }

    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }

    return pointer.data;
  }

  // Update the desired index value
  // Complexity: O(1)
  public set(data: T, index: number): T | null {
    let pointer = this._head;

    // If index is greater than length
    // or negative number
    if (index >= this.length || index < 0) {
      return null;
    }

    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
      pointer.data = data;
    }

    return pointer.data;
  }

  // Insert value at the desired index
  // Complexity: O(n)
  public insert(data: T, index: number): T | null {
    let node = new Node(data);
    let pointer = this._head;

    // If index is greater than length
    // or negative number
    if (index >= this.length || index < 0) {
      return null;
    }

    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }

    let nextPointer = pointer?.next;
    pointer.next = node;
    node.next = nextPointer;
    this.incLength();

    return node.data;
  }

  // Remove value from the desired index
  // Complexity: O(n)
  public remove(index: number): Node<T> | null {
    let pointer = this._head;

    // If index is greater than length
    // or negative number
    if (index >= this.length || index < 0) {
      return null;
    }

    if(index === 0) {
      return this.shift();
    }

    if(index === this.length - 1) {
      return this.pop();
    }

    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.next;
      let item = pointer.next;
      let nextItem = item.next;

      item.next = null;
      pointer.next = nextItem;

      this.decLength();
      
    }
    return pointer.next;
  }
}

let ll = new SinglyLinkedList(1);
ll.push(2);
ll.push(3);

// ll.shift();

console.log(ll);
console.log(ll.set(5, 1));
console.log(ll);
// ll.pop();
// console.log(ll);
// ll.pop();
// console.log(ll);
// ll.pop();
// console.log(ll);
// ll.pop();
// console.log(ll);
