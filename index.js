console.log("Node is working");
// let user={
//     name:"hehe",
//     age:23,
//     // [Symbol.toPrimitive](hint){
//     //     console.log(`so the symbol recieved is ${hint}`)
//     //     if(hint==="string"){
//     //         return `user=${this.name}`
//     //     }else if (hint==="number"){
//     //         return this.age
//     //     }else{
//     //         this.age.toString()
//     //     }
//     // }
// };
// console.log(String(user));
// console.log(500+Number(user));
// let user ={
//     name:"hehehe",
//     age:1111,
//     role:"admine"
// }

// for (let key in user){
//     console.log(`${key}: ${user[key]}`);
// }

// const isLogedin= false;

// const loggedPromise= new Promise((resolved,reject)=>{
//   if(isLogedin){
//     resolved("loggin successfull")
//   }else{
//     reject("not loggedin")
//   }
// })
// loggedPromise.then(result=>{
//     console.log(result)
// })
// .catch(result=>{
//     console.log(result)
// })
// .finally(()=>{
//     console.log("logging attempted was made")
// })


// const first = Promise.resolve("hii");

// const second = first.then(val => val + " name");

// second.then(val => {
//   console.log(val);
// });


// function userfetchuser(){
//     return Promise.reject("user data");
// }
// function fetchorder(){
//     return Promise.resolve("order data");
// }

// function fetchproduct(){
//     return Promise.reject("Product data");
// }
// Promise.any([
//     userfetchuser(),
//     fetchorder(),
//     fetchproduct()
// ]).then(res=>{
//     console.log(res);
// })

// function apicall() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("api fetched");
//         }, 500);
//     });
// }

// function api2call() {
//     return new Promise((_, reject) => {
//         setTimeout(() => {
//             reject("not able to fetch");
//         }, 200);
//     });
// }

// Promise.race([apicall(),api2call()])
// .then(res=>console.log(res))
// .catch(err=>console.log(err));



// Promise.allSettled([
//     Promise.reject("sales data"),
//     Promise.resolve("h data"),
//     Promise.resolve("j data")
// ]).then(result=>{
//     console.log(result)
// })