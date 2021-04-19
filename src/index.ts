import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"
import { NumbersCollection } from "./NumbersCollection"
import { Sorter } from "./Sorter"
const numbersCollection = new NumbersCollection([10000,3,-5,0])
const charactersCollection = new CharactersCollection('XssadasbBJOIk')
const sorter = new Sorter(numbersCollection)
const sorterString = new Sorter(charactersCollection)
const linkedList = new LinkedList()

linkedList.add(1)
linkedList.add(-231)
linkedList.add(0)
linkedList.add(1500)
linkedList.add(-2)

sorter.sort()
console.log(numbersCollection.data)

sorterString.sort()
console.log(charactersCollection.data)


const sorterList = new Sorter(linkedList)
sorterList.sort()
linkedList.print()