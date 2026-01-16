const a={
    p:1
}
console.log(a.hasOwnProperty("p"))//has ownproperty

console.log(a.toString()) // tostring

console.log(a.valueOf()) // value of

console.log(a.propertyIsEnumerable("p"));

console.log(Object.prototype.isPrototypeOf({}));