"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
// --------------------------------------------
// ----- Method by Abstract Sorter class ------
// --------------------------------------------
// Sorting numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([95, 3, 3, 41, 99]);
numbersCollection.sort();
console.log(numbersCollection.data); // [ 3, 3, 41, 95, 99 ]
// Sorting a string
const characterCollection = new CharacterCollection_1.CharacterCollection('TypeScript');
characterCollection.sort();
console.log(characterCollection.data); // ceipprSTty
// Sorting a linked list
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(1);
linkedList.add(7);
linkedList.add(0);
linkedList.add(4);
linkedList.sort();
linkedList.print(); // 0 1 4 7
// --------------------------------------------
// --- Method by Instantiating Sorter class ---
// --------------------------------------------
// import { Sorter } from "./Sorter";
// const numbersCollection = new NumbersCollection([95, 3, 3, 41, 99]);
// const numberSorter = new Sorter(numbersCollection);
// numberSorter.sort();
// console.log(numbersCollection.data); // [ 3, 3, 41, 95, 99 ]
// const characterCollection = new CharacterCollection("TypeScript");
// const characterSorter = new Sorter(characterCollection);
// characterSorter.sort();
// console.log(characterCollection.data); // ceipprSTty
// const linkedList = new LinkedList();
// linkedList.add(1);
// linkedList.add(7);
// linkedList.add(0);
// linkedList.add(4);
// const linkedListSorter = new Sorter(linkedList)
// linkedListSorter.sort()
// linkedList.print(); // 0 1 4 7
