const h=[121,1,1,22]

const mapp = h.map(item=>item*2);
console.log(mapp)


const filterr= h.filter(item=> item>100)
console.log(filterr)


h.forEach(item=> console.log(item))



const total= h.reduce((sum,price)=>sum+price,0)
console.log(total)


const checkk= h.some(it=>it>=1)
console.log(checkk)

const every=h.every(it=> it!=0)
console.log(every)

const g=h.find(num=>num===1)
console.log(g)

const p=h.findIndex(num=>num===12)
console.log(p)