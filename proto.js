function  create(firstname , lastname){
    this.firstname = firstname;
    this.lastname = lastname ;
}
let names2 = new create("keshav","rao");
console.log(names2);
let obj = {
    firstname : "keshva",
    lastname : "rao"
}
create.prototype.getname = function(){
    return this.firstname+" "+this.lastname;
}
console.log(names2.getname())
/*__________________________________________________________*/
//prototypal inheritance

const proto = {
    slogan : function () {
        console.log("heloo");
    },
    changename :  function (names1){
        this.name = names1;
    }
}
const inh = Object.create(proto);
inh.name = "maruti";
inh.engine = "bs6";
inh.changename("honda");
console.log(inh)
//alternate Syntax
const inh2 = Object.create(proto,{
    name : {
        value : "maruti",
        writable : true //enumerable 
    },
    engine : {
        value : "bs4",
        writable : true
    }
});
inh2.changename("mitshibushi");
console.log(inh2);
inh2.__proto__  = proto 
function employee(name,salary,experience){
    this.name = name ;
    this.salary = salary;
    this.experience = experience ;
}
employee.prototype.slogann = function(){
    return "best company";
}
let emp1 = new employee("keshava ",34444, 8);
console.log(emp1)
//for similar profile
function programmer(name , salary , experience, language){
    employee.call(this,name,salary, experience);
    this.language = language ;
}
let p1 = new programmer("rahul",2999,87,"java");
console.log(p1);
//inherit the prototype of employee into 
programmer.prototype = Object.create(employee.prototype)
//manually set the constructor 
//combine two objects 
//res and spread parameters
//immedietly invoking functions
//propetry flags and descriptors
//getters and setters for objects