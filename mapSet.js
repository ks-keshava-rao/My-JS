const myArr = [1,2,3,4,5,6,6,7,7,22,44,55];
const mySet = new Set(myArr);
//removes the duplicate values 
console.log(myArr);
console.log(mySet);
//back to array using spread operator
const Uniquearr = [...mySet];
console.log(Uniquearr);