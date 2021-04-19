import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"
import { NumbersCollection } from "./NumbersCollection"
const numbersCollection = new NumbersCollection([10000,3,-5,0])
const charactersCollection = new CharactersCollection('XssadasbBJOIk')
const linkedList = new LinkedList()

linkedList.add(1)
linkedList.add(-231)
linkedList.add(0)
linkedList.add(1500)
linkedList.add(-2)

numbersCollection.sort()
console.log(numbersCollection.data)
charactersCollection.sort()
console.log(charactersCollection.data)
linkedList.sort()
linkedList.print()