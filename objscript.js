//object literals
let obj = {
    firstName : "keshav",
    age :22 ,
    lastName : "rao" ,
    display : function () {
               console.log(this.firstName + " " + this.lastName);
    }
}
//object utility methods
console.log( )
obj.display()

//factory function 
function createdata(firstName,lastName)
{
    return {
        firstName : firstName,
        lastName : lastName,
        getfullname(){
            console.log(this.firstName + " " + this.lastName);
        }
    }
}

let person1 = new createdata('keshav','rao');
let person2 = new createdata('robert','drowney');
person1.getfullname()
person2.getfullname()

function cardata(name,model,year){
 this.name = name;
 this.model = model;
 this.year = year;
 this.display = function(){
     console.log(this.name + " "+this.model+" "+this.year);
 };
}
let car1 = new cardata('huyndai','suv',2022);
let car2 = new cardata('skoda','cruiser',2021);
car1.display()
car2.display()
console.log(window.display())
//iteratables map set , weak map and weak set, iimedietly invoking functions , call ,binding,apply,
