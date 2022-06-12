//object property shorthand
const name='Harshit'
const userAge=20

const user={
     name,
    age:userAge,
    location: 'kanpur'

}

console.log(user)

//object destruction

const product={
    label:'red notebook',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.3
}

// const label=product.label
// const stock=product.stock

const {label:productlabel,stock,rating=5}=product
console.log(productlabel)
console.log(stock)
console.log(rating)


const transaction=(type, { label, stock }={})=>{
    console.log(type,label,stock)
}
transaction('Order',product)