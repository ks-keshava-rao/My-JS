let dict = {
    name : 'keshav',
    tech : 'javascript',
    level : 'begginer', 
    laptop : {
        cpu :"i7",
        ram : "3gb",
        rom :"1tb"
    }
}
console.log(dict);
console.log(dict.laptop);
console.log(dict.laptop.cpu);
console.log(dict.laptop.cpu.length);
delete dict.tech ;
console.log(dict);
for(key in dict)
    {
        console.log(key,dict[key]);
    }
for(key in dict.laptop)
    {
        console.log(key,dict.laptop[key]);
    }