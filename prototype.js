let arr = ["keshav","raj","ellen"]
// prototype is an hidden object that is attached to the arrays objects and functions
// __proto__
console.log(arr.__proto__)
console.log(Array.prototype)
console.log(arr.__proto__.__proto__)//object 
console.log(Object.prototype)//same
console.log(arr.__proto__.__proto__.__proto__)
