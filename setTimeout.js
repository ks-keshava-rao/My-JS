console.log("welcome");
function close(name,next)
    {
        console.log("hello"+name+next);
    }
timeOut = setTimeout(close,5000,"my name","keshav");
console.log(timeOut);
clearTimeout(timeOut);