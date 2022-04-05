class  car {
    constructor(company,model,engine,yom){
        this.company = company;
        this.model = model;
        this.engine = engine;
        this.yom = yom;
    }
    //class methods 
    carInfo(){
        return `This is manufactured by ${this.company} model ${this.model} with ${this.engine} engine in the year ${this.yom}`
    }
}
let nano = new car("tata","x2","bs8",2030);
console.log(nano)
console.log(nano.carInfo())