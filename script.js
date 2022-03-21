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
