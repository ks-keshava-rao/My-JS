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
