"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10000, 3, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('XssadasbBJOIk');
var sorter = new Sorter_1.Sorter(numbersCollection);
var sorterString = new Sorter_1.Sorter(charactersCollection);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(1);
linkedList.add(-231);
linkedList.add(0);
linkedList.add(1500);
linkedList.add(-2);
sorter.sort();
console.log(numbersCollection.data);
sorterString.sort();
console.log(charactersCollection.data);
var sorterList = new Sorter_1.Sorter(linkedList);
sorterList.sort();
linkedList.print();
