const fs=require('fs')
const { json } = require('stream/consumers')

// const book={
//     title:'Ego is the enemy',
//     author:'Ryan Holiday'
// }



// const bookJSON=JSON.stringify(book)
// console.log(bookJSON.title)
// fs.writeFileSync('1-json.json',bookJSON)


// const dataBuffer=fs.readFileSync('1-json.json')
// const dataJSON=dataBuffer.toString()//converted to string
// const data=JSON.parse(dataJSON)//parsing the data into object
// console.log(data.title)//accessing the contents of book

const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const user=JSON.parse(dataJSON)

user.name='Harshit'
user.age='20'

const userJSON=JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)