const arr=[100,200,"kk"]
arr.push("ll")
console.log(arr)
arr.pop()
console.log(arr);

const a=new Array()
a.push(3)
console.log(a)

a.shift();
console.log(a)
a.unshift("hello")
console.log(a)


const j=[11,22,33,9]
j.splice(2,2,"dd")
console.log(j);

j.sort((a,b)=>a-b)
console.log(j)

j.reverse()
console.log(j)