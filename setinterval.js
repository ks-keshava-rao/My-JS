function out(first,second)
    {
        console.log("hello"+" "+first+" "+second);
    } 
Intervalid=setInterval(out,1000,"how are","you");
clearInterval(Intervalid)