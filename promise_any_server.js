const p1=new Promise((resolve,reject)=>{
    reject("server 1 is running");
})

const p2= new Promise((resolve,reject)=>{
    reject("server 2 is down");
})

const p3= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("server 3 is running"),10000)
})
console.log(p3)
const a= Promise.any([p1,p2,p3]);
a.then(res=>console.log(res))
