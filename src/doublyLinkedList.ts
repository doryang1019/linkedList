export class doubleNode {
  public value: number;
  public next: any;
  public pre: any; // 跟 node 比起來多一個這個
  constructor(value) {
    this.value = value;
    this.next = null;
    this.pre = null;
  }
}

export class doublyLinkedList {
  public tail: doubleNode;
  public head: doubleNode;
  public length: number;
  constructor(value) {
    const newNode = new doubleNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  public push(value) {
    const newNode = new doubleNode(value);
    if (!this.head) { // 如果是第一個節點
      this.head = newNode;
      this.tail = newNode;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.pre = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

//   public pop() {
//     if(this.length === 0) {
//         return undefined;
//     }else {
//         this.t
//     }
//   }

  public shift(value){
    const newNode = new doubleNode(value);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // point first
      this.head.pre = newNode;
      this.head = newNode;
      this.length++;
    }
  }
//   public unshift() { // remove the first item

//   }
 }
