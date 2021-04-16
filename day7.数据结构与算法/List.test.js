const List = require('./List')
const myList = new List()
myList.append('小海螺')
myList.append('大螃蟹')

// console.log(myList.toString())
myList.remove('大螃蟹')
myList.append('大烤肠')
// console.log(myList.toString(), myList, myList.length())
myList.insert('烤冷面', '大烤肠')
console.log(myList.toString(), myList.length())

for (myList.front(); myList.currPos() < myList.length(); myList.next()) {
  console.log(myList.getElement())
}
console.log(myList.currPos())

const fs = require('fs')

const fileList = fs.readdirSync('./avlist')
const FL = new List()

FL.append = (name) => {
  fs.writeFileSync(`./avlist/${name}.av`)
  FL.__proto__.append.call(FL, name)
}

FL.append('小螃蟹')

FL.append('大海螺')