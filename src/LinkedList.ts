import { idText } from 'typescript';
import { Node } from './Node';
export class LinkedList {
  public tail: Node;
  public head: Node;
  public length: number;
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  public push(value) {
    const newNode = new Node(value); // 新的node
    // 一開始head 沒有指向任何東西
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  public pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    } // find the node which should pop
    this.tail = pre;
    this.tail.next = null; // ｐｏｐ掉
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp; // return 被 pop 掉的 node
  }

  public unshift(value) {
    const newNode = new Node(value);
    if (!this.head) { // initial linkedList
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  public shift() {
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    } else {
      const tmp = this.head; // 要拿掉的node
      this.head = this.head.next;
      tmp.next = null;
      this.length--;
      return tmp;
    }
  }
  public get(index) {

    if (index >= this.length || index < 0) {
      return undefined;
    } else {
      let i = 0;
      let tmp = this.head;
      while (i < index) {
        tmp = tmp.next;
        i++;
      }
      return tmp;
    }
  }
  public set1(index, value) {
    const tmp = this.get(index);
    if (tmp) {
      tmp.value = value;
    }
    return this;
  }

  public set(index, value) {
    if (index >= this.length || index < 0) {
      return undefined;
    } else {
      let i = 0;
      let tmp = this.head;
      while (i < index) {
        tmp = tmp.next;
        i++;
      }
      tmp.value = value;
      return this;
    }
  }
  public insert(index, value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      if (index >= this.length || index < 0) {
        return undefined;
      } else if (index === 0) {
        return this.unshift(value);
      } else if (index === this.length - 1) {
        return this.push(value);
      } else {
        const tmp = this.get(index - 1);
        newNode.next = tmp.next;
        tmp.next = newNode;
        this.length++;
      }

    }
  }

  public remove(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }
    if (!this.head) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    } else {
      let pre = this.head;
      let curr = this.head;
      let i = 0;
      while (i < index) {
        pre = curr;
        curr = curr.next;
        i++;
      }
      pre.next = curr.next;
      curr.next = null;
      this.length--;
      return this;
    }
  }
  public reverse() {
    let tmp = this.head;
    this.head = this.tail;
    this.tail = tmp;
    let next = tmp.next;
    let pre = null;
    for (let i = 0; i < this.length; i++) {
      next = tmp.next;
      tmp.next = pre;
      pre = tmp;
      tmp = next;
    }
    return this;
  }
}
