const obj={
    a:1,
    b:109,
    c:{
        g:0
    },
    d:[12,11,22]
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.hasOwn(obj,"d"))
Object.assign(obj, { l: 1 }, { b: 2 });
console.log(Object.entries(obj))


const objh = Object.create(null);
console.log(objh)

Object.freeze(objh)/// prevent modificaion

Object.seal(objh) // prevent addition and deletion
console.log(obj)
console.log(Object.getPrototypeOf(obj))

console.log(Object.is(obj,objh))///checking two objects are same or not



console.log(Object.isFrozen(obj), Object.isSealed(obj), Object.isExtensible(obj))//check the state of the object