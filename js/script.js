'use strict'

    const insertWordInto = function (arg) {
    const placeInStr = [];
    return function insert (str) {
        const arr = arg.split([' '])
        const number = Math.floor(Math.random() * (arr.length + 1));
        if (!placeInStr.includes(number)) {
            placeInStr.push(number);
            arr.splice(number, 0, str)
            return arr.join([' ']);
        }
        if (placeInStr.length === (arr.length +1)) {
            arr.splice(number, 0, str)
            return arr.join([' ']);
        }
        return insert(str);
    }
}

const insert = insertWordInto('hello world')

const result = insert('Odesa')
console.log(result)

const secondResult = insert('Odesa')
console.log(secondResult)

const thirdResult = insert('Odesa')
console.log(thirdResult)

const fourthResult = insert('Odesa')
console.log(fourthResult)
//
// // optional
// const fourthResult = insert('Odesa') // -> 'Odesa hello world': лише на цьому кроці вставка слова повторилась

