
// for(let i=0 ; i<document.body.childNodes.length; i++){
//     alert(document.body.childNodes[i]);
// }
for(let i=0 ; i<document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
}
console.log(document.body.childElementCount);
console.log(document.body.childNodes[0]===document.body.firstChild);
console.log(document.body.childNodes[document.body.childNodes.length - 1]===document.body.lastChild);
console.log(document.body.firstChild);
for(let node of document.body.childNodes){
    console.log(node);
}

console.log(document.body.parentNode === document.documentElement);
console.log(document.head.nextSibling);
console.log( document.body.previousSibling ); // HTMLHeadElement
console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);