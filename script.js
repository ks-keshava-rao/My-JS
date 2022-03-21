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
//Checks if every element in an array pass a test
// arr.every(check)
function check(ele){
    return ele>7;
}
console.log(arr.every(check))