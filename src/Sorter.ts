export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number): boolean;
  abstract swap(leftIndex: number): void;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j)) {
          this.swap(j);
        }
      }
    }
  }
}


// ------------------------------
// ------ Alternate method ------
// ------------------------------
// Where sorter instantiation is required

// Also using abstract class is the right way as 
// there is a strong dependancy. 

// interface Sortable {
//   length: number;
//   compare(leftIndex: number): boolean;
//   swap(leftIndex: number): void;
// }

// constructor(public collection: Sortable) {}
// Everything must be called using this.collection

// Example index.ts : 
// const numbersCollection = new NumbersCollection([95, 3, 3, 41, 99]);
// const numberSorter = new Sorter(numbersCollection);
// numberSorter.sort();
// console.log(numbersCollection.data); // [ 3, 3, 41, 95, 99 ]
