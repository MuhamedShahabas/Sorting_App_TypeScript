"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    // ASCII value comparison
    compare(leftIndex) {
        return (this.data[leftIndex].toLowerCase() >
            this.data[leftIndex + 1].toLowerCase());
    }
    // Split, swap and join
    swap(leftIndex) {
        const characters = this.data.split("");
        const temp = characters[leftIndex];
        characters[leftIndex] = characters[leftIndex + 1];
        characters[leftIndex + 1] = temp;
        this.data = characters.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
