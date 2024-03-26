// const t = require('fs')
// const p = t.readFileSync('./new.txt', 'utf8')
// console.log(p)
// t.writeFileSync('./wtittencontent.txt', "this is the added written", "utf8")
// console.log("done with this task")
//can make this asyncronous in nature

// const t  = require('fs')
// const as = t.readFile('./new.txt', 'utf8')

//here readFile method is used instead of readFileSync or writeFileSyncq


const _ = require('lodash')

const items = [1,[2,[3,[4,5]]]]
console.log(items)
const newItems = _.flattenDeep(items)
console.log(newItems)