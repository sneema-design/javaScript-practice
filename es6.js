const add=(a,b)=>{
   console.log(a+b)
}

add(2,4)///arrow function

const person={name:"alice",age:9};
const {name,age}=person;

console.log(name)//object destruction


const number=[100,200,2];
const [a,b]=number;
console.log(a); /// array destruction

const arr1=[1,2,3,4]
const arr2=[...arr1,6]
console.log(arr2);//spred operator used for shallow copy


const map=new Map();
map.set("rohan",100);
map.set("jj","kapp")

console.log(map);
console.log(map.get("rohan"));


map.forEach((key, value) => {
    console.log(key,value);
});
console.log( map.keys())
console.log( map.values())
// map.clear(),, map.delete()
//// maps in js


const sett= new Set([1,22,3,3,6,8,2,6]);
console.log(sett);
console.log(sett.has(2));
sett.add(91)
sett.delete(2)
console.log(sett.has(2));
console.log(sett.values(),sett.keys()); ///in set keys are same as values



class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        return `hello ${this.name}` 
    }
}

const p1=new Person("hh")
console.log( p1.greet())


class Employee extends Person{
    constructor(name,role){
        super(name);
        this.role=role;
    }
    work(){
        return `this employee named ${this.name} is having role ${this.role}`
    }
}
const e1=new Employee("jhon","engineer")
console.log(e1.greet())
console.log(e1.work())


class User{
    #pass
    name;
    constructor(name,password){
        this.name=name;
        this.#pass=password
    }
    info(){
        return `username is ${this.name} and password is ${this.#pass}`
    }
}

const u1=new User("jjk","*1234")
console.log(u1.info)
//class and in class inheritance, super , this and why not using arrow function in class

const id =Symbol("id")

const user={
    name:"dd",
    [id]:123,
}
const user2={
    name:"dde",
    [id]:123
}

console.log(user[id],user2[id])
console.log(Object.keys(user))