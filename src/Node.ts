export class Node {
  public value: any;
  public next: any;
  constructor(value) {
    this.value = value;
    this.next = null;
    return this;
  }
}
