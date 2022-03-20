let obji = {
    name : "keshav",
    age :20
}
let emobji = {};
for (let key in obj)
{
    emobj[key] = obj[key];
}
emobji = obji;
console.log(emobji);