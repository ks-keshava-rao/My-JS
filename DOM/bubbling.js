//EVENT CAPTURING
document.querySelector('#grandparent')
.addEventListener('click',()=>{
    console.log("grandparent clicked");
},false)
document.querySelector('#parent')
.addEventListener('click',(e)=>{
    console.log("parent clicked");
    e.stopPropagation();
},false)
document.querySelector('#child')
.addEventListener('click',()=>{
    console.log("child clicked");
},false)
//by default if the false argument is not passed then
 //it is in bubbling mode
 //EVENT BUBBLING
document.querySelector('#grandparent')
.addEventListener('click',()=>{
    console.log("grandparent clicked");
},false)
document.querySelector('#parent')
.addEventListener('click',()=>{
    console.log("parent clicked");
},false)
document.querySelector('#child')
.addEventListener('click',()=>{
    console.log("child clicked");
},false)