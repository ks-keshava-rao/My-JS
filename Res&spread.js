//used in array and objects
//Rest= elements are combined
function addNumber(a,b,c,...other){
    console.log(other[0],other[1])
    return a+b+c;
}
const res = addNumber(2,4,5,23,44)
console.log(res)

//spread 
const names = ["keshav","aman", "rao"];
function getname(name1, name2, name3){
    console.log(name1,name2,name3);
}
getname(names[0],names[1], names[2])
