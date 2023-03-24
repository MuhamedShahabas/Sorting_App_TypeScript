import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  // ASCII value comparison
  compare(leftIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() >
      this.data[leftIndex + 1].toLowerCase()
    );
  }

  // Split, swap and join
  swap(leftIndex: number): void {
    const characters = this.data.split("");
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[leftIndex + 1];
    characters[leftIndex + 1] = temp;
    this.data = characters.join("");
  }
}
