// const arr=["d","h","f"];
// arr.forEach((item,key)=>{
//     console.log(item,key);
// })


// const price=[100,22,23,43,4];
// let total=0;
// price.forEach(d=>{
//     total+=d
// })
// console.log(total)

const inventory=[{item:"Laptop",stock:3},{item:"phone",stock:0},{item:"l",stock:8}]

inventory.forEach(product=>{
    if(product.stock===0){
        console.log(`the ${product.item} is out of stock`);
    }
})