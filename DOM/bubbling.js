//EVENT CAPTURING
document.querySelector('#grandparent')
.addEventListener('click',()=>{
    console.log("grandparent clicked");
},false)
document.querySelector('#parent')
.addEventListener('click',(e)=>{
    console.log("parent clicked");
    e.stopImmediatePropagation();
},false)
document.querySelector('#child')
.addEventListener('click',()=>{
    console.log("child clicked");
},false)
//by default if the false argument is not passed then
 //it is in bubbling mode
 //EVENT BUBBLING
// document.querySelector('#grandparent')
// .addEventListener('click',()=>{
//     console.log("grandparent clicked");
// },true)
// document.querySelector('#parent')
// .addEventListener('click',()=>{
//     console.log("parent clicked");
// },true)
// document.querySelector('#child')
// .addEventListener('click',()=>{
//     console.log("child clicked");
// },true)
//Events- all 
// reason for bubling capturing 
// mousedown – starts the selection (move the mouse to select).
// click on <a href=""> - open the page.
// click on <input type="checkbox"> – checks/unchecks the input.
// submit – clicking an <input type="submit"> or hitting Enter inside a form field causes this event to happen, and the browser submits the form after it.
// keydown – pressing a key may lead to adding a character into a field, or other actions.
// contextmenu – the event happens on a right-click, the action is to show the browser context menu. etc.