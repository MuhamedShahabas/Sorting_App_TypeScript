import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  // Adding values
  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  // Fetching the length
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  // Fetchig value at given index
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds.");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds.");
  }

  // Comparison of value between current and next node
  compare(leftIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(leftIndex).data > this.at(leftIndex + 1).data;
  }

  // Only swapping of the values is done, not node 😉😶‍🌫️
  swap(leftIndex: number): void {
    const { data: nodeValue } = this.at(leftIndex);
    this.at(leftIndex).data = this.at(leftIndex + 1).data;
    this.at(leftIndex + 1).data = nodeValue;
  }

  // Printing all the values
  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
