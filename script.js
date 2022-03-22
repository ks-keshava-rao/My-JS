let arr = [1,2,4,5,6,7];
let arr2 = [6,7,8,9,0];
console.log(arr); 

console.log(arr.concat(arr2))

//copyWithin(Target,start,end)
console.log(arr.copyWithin(0,2,4))
// arr = arr2;

let arr1 = [1,2,4,5,6,7];
const f = arr1.entries();
console.log(f)
for(let x of f){
    console.log(x)
}

//Checks if every element in an array pass a test return boolean
// arr.every(check)
function check(ele){
    return ele>7;
}
console.log(arr.every(check))

// Fill all the elements with a value:
console.log(arr.fill("h",3,5));

// Map() Filter() reduce() are higher order functions
//map() transforms the array
let output = arr1.map(double);
function double(x){
return x*2;
}
console.log(output);

//filter
let outputf = arr1.filter(isodd);
function isodd(value){
    return value%2;
}
console.log(outputf); 

//reduce()
let outputr = arr1.reduce(function(acc,curr){
acc = acc + curr;
return acc;
},0);
console.log(outputr); 

//tricky 
const users = [
   { 
    firstName : 'keshav' ,
    age : 10 ,
    lastname : 'rao'
    },
   { firstName : 'raj' ,
     age : 26 , 
     lastname : 'kum'
   },
   { firstName : 'ramesh' ,
    age : 33 , 
    lastname : 'na'
  },
  { firstName : 'tom' ,
    age : 44 , 
    lastname : 'uncle'
  },
]
// chaining the map filter
const outputo = users.filter(x => x.age<40)
.map(x=>x.firstName);
console.log(outputo); 
//using reduce
const outputx = users.reduce(function(acc,curr){
    if(curr.age<=40){
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(outputx);

//find() Returns the value of the first element in an array that pass a test
const ages = [3,5,7,9,11];
function checkage(age)
{
    return age>4;
}
console.log(ages.find(checkage));//5 
 
//from()
let text = "{ABCDEFG"
const myArr = Array.from(text);
console.log(myArr)
//7207430249

//key() returns iterators
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let textt = "";
for (let x of keys) {
  textt += x ;
}
console.log(textt);

//slice
console.log(fruits.slice(0,3));
console.log(fruits.slice(-3,-1));

//some() method checks if any array elements pass a test
const age = [1,2,3,44,66,77]
console.log(age.some(checkadult))
function checkadult(x){
    return x>18;
}

//splice()
fruits.splice(1,2)
console.log(fruits)

//join()
const fruitss = [1,2,3,4,"ss"];
console.log(fruitss.join(" and "))


