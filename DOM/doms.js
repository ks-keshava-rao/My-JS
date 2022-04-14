
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
//list tags
const ultag = document.body.children[1];
console.log(ultag);
const litag = ultag.children ;
console.log(litag[0].textContent)
console.log(litag[0].nextElementSibling.textContent)

//table DOM manipulation 
const tabletag = document.body.children[3];
console.log(tabletag.tBodies[0].rows[1].cells[0].textContent);
console.log(tabletag.tBodies[0].rows[1].cells[0].style = "background-color:yellow");
//table 2 color changes 
const table2tag = document.body.children[5];
console.log(table2tag.tBodies[0].rows[0].cells[0].textContent);

table2tag.tBodies[0].rows[0].style = "background-color:yellow";
table2tag.tBodies[0].rows[1].style = "background-color:red";
table2tag.tBodies[0].rows[2].style = "background-color:brown";
table2tag.tBodies[0].rows[3].style = "background-color:orange";
table2tag.tBodies[0].rows[4].style = "background-color:blue";

// diagonal 
// Array.from(table.rows).map((x,i) => x.cells[i].style.background = "red")
let tablerows = table2tag.rows;
console.log(tablerows[0].cells.length)
for(let i = 0 ; i<tablerows.length;i++){
    for(let j=0 ; j<tablerows[i].cells.length;j++){
        tablerows[i].cells[j].innerText = `${j + 1}:${i + 1}`;
        if(i==j){
            tablerows[i].cells[j].style.backround = 'red';
        }
    }
}

