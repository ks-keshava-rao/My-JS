let input = 'name';
let my = {
    title :'bollywood',
    videolength :15 ,
    name:"kkr",
    description : " this it this",
    creator : "arijits singh",
    copyrights : "Eros now",
    lyrics : "javed ali"
}
//console.log(my)
console.log(my.name)
my.name = "hello"
console.log(my.name)
console.log(my['name'])
my['name'] = "cringe"
console.log(my['name'])
console.log(my[input])
// iterable objcets
let keys  = Object.keys(my);
console.log(keys)
let vals =  Object.values(my);
console.log(vals)
let entries =  Object.entries(my)
console.log(entries)
// if('name' in keys) 
// console.log( 'find' )
// else 
//find key in object
let ut = 'title' in my;
let out4 = 'kk' in my;
console.log(out4);
out2 = my.hasOwnProperty('w')
console.log(out2);

//combine two objects
let person = {
    firstname : " keshab"
}