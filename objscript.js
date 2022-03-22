//object literals
let obj = {
    firstName : "keshav",
    age :22 ,
    lastName : "rao" ,
    display : function () {
               console.log(this.firstName + " " + this.lastName);
    }
}
obj.display()

// object constructor
let  obj2 = new Object();
obj.firstName = "rahul";
console.log(obj2)
//Object create 