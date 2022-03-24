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


 let det = {
    firstname : 'pavan'
    , lastName : 'kumar'
    //,place : 'hyderabad'
    }
 let det2 = {
    firstname : 'johnny '
    , lastName : 'lever'
    //,place : 'hyderabad'
    }

displaydet = function(places,state='NA'){
    console.log(this.firstname + " "+this.lastName+" lives in "+places+
    ','+state)
}

displaydet.call(det,"mumbai",'MH');
displaydet.call(det2,"chNDIGARH");

//Apply() method

// displaydet.call(det,"mumbai");
