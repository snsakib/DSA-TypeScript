class Stack {
  private _storage: number[];
  private _topPointer: number | null;

  constructor() {
    this._storage = [];
    this._topPointer = null;
  }

  // Push a value on the top of the Stack
  // Point the _topPointer to the top of the Stack
  // Complexity: O(1)
  public push(value: number) {
    this._storage.push(value);
    this._topPointer = value;
  }

  // Pop the top most value from the Stack
  // Point the _topPointer to the top of the Stack
  // Complexity: O(1)
  public pop(): number | null {
    if (this._storage.length > 0) {
      let value: number = this._storage.pop();
      this._topPointer = this._storage.length - 1;
      return value;
    } else {
      return null;
    }
  }

  // Return the value from the desired index
  // If the index is not valid, return -1
  // Complexity: O(n)
  public peek(index: number): number {
    if (index < this._storage.length) {
      return this._storage[index];
    } else {
      return -1;
    }
  }

  // Return the top most value of the Stack
  // Complexity: O(1)
  public getTop(): number | null {
    return this._topPointer;
  }

  // Return "false" if Stack is empty, else return "true"
  // Complexity: O(1)
  public isEmpty(): boolean {
    return this._storage.length === 0;
  }

  // Return the size of the Stack
  // Complexity: O(1)
  public size(): number {
    return this._storage.length;
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
myStack.pop();
console.log(myStack);
console.log(myStack.peek(2));
console.log(myStack.getTop());
console.log(myStack.isEmpty());
myStack.pop();
myStack.pop();
console.log(myStack.isEmpty());
