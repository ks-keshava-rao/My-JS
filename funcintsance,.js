A = function() {
return function(para)
{
console.log("hello world"+" "+para);
}
}
let b=A();
b();
let c=A()
c("hello");