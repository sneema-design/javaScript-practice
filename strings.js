const str="hello welcome, hello welcome to this world ,hello you are jhon??";
console.log(str.toUpperCase());
console.log(str);
console.log(str.length);

console.log(str.charAt(2));
console.log(str.charCodeAt(4));
console.log(str[3]);
console.log(str.indexOf("e"));
console.log(str.includes("ll"))
console.log(str.startsWith("h"))
console.log(str.endsWith("k"));
console.log(str.slice(0,4));
console.log(str.replace("hello","hi"))
console.log(str.replaceAll("hello","hi"));
console.log(str.trim());

console.log(str.concat(" ","bkdkd"))



///converting string with array

const arr=str.split(",")
console.log(arr);

//converting array to string

const str1=arr.join(" ")
console.log(str1);


console.log(str.padStart(6,"hey"));