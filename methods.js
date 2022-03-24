let names = {
    firstname : 'keshav'
    , lastName : 'rao'
    ,place : 'hyderabad'
    ,display : function(){
        console.log(this.firstname + " "+this.lastName+" lives in "+this.place)
    }
}
names.display()

let names2 = {
    firstname : 'raj'
    , lastName : 'singh'
    ,place : 'blore'
    }
 // function borrow
 names.display.call(names2);