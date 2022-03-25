const myArr = [1,2,3,4,5,6,6,7,7,22,44,55];
const mySet = new Set(myArr);
//removes the duplicate values 
console.log(myArr);
console.log(mySet);
//back to array using spread operator
const Uniquearr = [...mySet];
console.log(Uniquearr);
//set methods
mySet.add(88);
console.log(mySet);
mySet.add("hello");
console.log(mySet);
mySet.add({name:"keshav", city : 'hyd'});
console.log(mySet);
mySet.delete(3)
console.log(mySet);
console.log(mySet.has(mySet.name))//similar to includes()


//Maps we can use any type of key or value
const mymap = new Map();
const key1 = 'mystr',
            key2 = {},
            key3 = function(){ };
mymap.set(key1,"this is string");
mymap.set(key2,"this is object");
mymap.set(key3,"this is function");
console.log(mymap);
let value = mymap.get(key3);
console.log(value);
console.log(mymap.size)
for(let [key,value] of mymap)
{
    console.log(key,value);
}
for(let key of mymap.keys()){
    console.log(key);
}
for(let key of mymap.values()){
    console.log(key);
}
mymap.forEach((value,key)=>{
    console.log(key);
    console.log(value);
}) 
//map to array
let arr = Array.from(mymap);
console.log(arr);
//keys array
let arrk = Array.from(mymap.keys());
console.log(arrk);
//keys array
let arrv = Array.from(mymap.values());
console.log(arrv);


//WEAK SET

