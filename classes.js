// classes do not support hoisting
class  car {
    constructor(company,model,engine,yom){
        this.company = company;
        this.model = model;
        this.engine = engine;
        this.yom = yom;
    }
    static year = 2022;

    //class methods 
    carInfo(){
        return `This is manufactured by ${this.company} model ${this.model} with ${this.engine} engine in the year ${this.yom}`
    }
    runningfrom(){
        return `Running from ${2022 - this.yom} years ` ;
    }
    static currMileage(pre,curr)
    {
        return Math.abs(curr-pre); 
    }
}
let nano = new car("tata","x2","bs8",2014);
console.log(nano)
console.log(nano.carInfo())
console.log(nano.runningfrom())
console.log(car.currMileage(77,33))
//inheritance 
class sportsCar extends car {
    constructor(company,model,engine,yom,topSpeed,horsepower){
        super(company,model,engine,yom)
        this.topSpeed = topSpeed;
        this.horsepower = horsepower;//to call the constructor of the parent class
        
    }        
    category(){
        if(this.topSpeed<200 &&( this.horsepower<50 )){
            return "class A sports car";
        }
        else if(this.topSpeed<300 && (this.horsepower<100 )){
            return "class B sports car";
        }
        else if(this.topSpeed<400 && (this.horsepower<200 )){
            return "class C sports car";
        }
        else {
            return 'Normal car'
        }
     }
     static totalPower(ts,hs){
        return ts*hs + " power";
     }

}

let lambo = new sportsCar("lambo","mclaren","v12",2015,321,112);
console.log(lambo.carInfo());
console.log(lambo.runningfrom());
console.log(lambo.category()); 
console.log(sportsCar.totalPower(100,45)); 

//classes also support class expressions 
let varclass = class {
    method(){
        return "this is class expression"
    }
}
let instance = new varclass();
console.log(instance.method());
console.log(varclass.name)
//inheriting from constructor objects 
function animal(name){
    this.name = name;
}
animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise`);
}
class dog extends animal {
        speak(){
            console.log(`${this.name } barks`);
        }
}
let d = new dog("tommy");
d.speak();
//species
