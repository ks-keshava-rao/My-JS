class  car {
    constructor(company,model,engine,yom){
        this.company = company;
        this.model = model;
        this.engine = engine;
        this.yom = yom;
    }
    // let year = 2022;

    //class methods 
    carInfo(){
        return `This is manufactured by ${this.company} model ${this.model} with ${this.engine} engine in the year ${this.yom}`
    }
    runningfrom(){
        return 2022 - this.yom ;
    }
    static add(a,b)
    {
        return a+b; 
    }
}
let nano = new car("tata","x2","bs8",2014);
console.log(nano)
console.log(nano.carInfo())
console.log(nano.runningfrom())
console.log(car.add(34,55))
//inheritance 
class sportsCar extends car {
    constructor()
}