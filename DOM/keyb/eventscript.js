document.addEventListener("DOMContentLoaded",function(){
    alert("dom built")
})
btn = document.getElementById('clickBn');
btn2 = document.getElementById('clickBtn');
btn.addEventListener('click', togglehide)
// btne.onclick = togglehide ;
para.addEventListener('mouseover', run);
para.addEventListener('mouseout', runout)
para.addEventListener('dblclick',right );
btn2.addEventListener('mouseup', pressed);
btn2.addEventListener('mousedown', pressedleft);
btn2.addEventListener('contextmenu', rightclick);
function rightclick(){
    console.log("right click");
}
function pressed(){
    console.log("pressed");
}
function pressedleft(){
    console.log("released");
}
function right(){
    console.log("mouse doubleclick clicked")
}
function run() {
    console.log("mouse Inside")
    // para.style.backgroundColor = "green"
}
function runout() {
    console.log("mouse outside")
    // para.style.backgroundColor = "green"
}
function togglehide() {
    para = document.getElementById('para');
    if (para.style.display != 'none')
        para.style.display = "none";
    else {
        para.style.display = "block"
    }
}

// // btn = document.getElementById('clickBtn');
// clickBtn.onClick = callme;
// function callme(){
//     alert('clicked');
// }
// function callme(event){
//     console.log(event.type);
//     console.log(event.currentTarget);
//     console.log(event.clientY);
//     console.log(event.clientX);
//     // alert('clicked');
// }
// document.getElementById('clickBn').onclick = callme;
// //events
// function call2(){
//     alert("metho2 call 1");
// }
// function call3(){
//     alert("metho2 call 2");
// }
// //addEventListner supports multiple call
// document.getElementById('clickBtn').addEventListener('click',call2);
// document.getElementById('clickBtn').addEventListener('click',call3);
// document.getElementById('clickBtn').removeEventListener('click',call3);
// //this in event listers refers to element to which the event is attached
