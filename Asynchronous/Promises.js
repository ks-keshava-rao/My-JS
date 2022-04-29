// promise may be :-
// - resolve
// - reject
// - pending
function Promfunc() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Promise resolved");
                resolve();
            }
            else {
                console.log("Promise not resolved");
                reject(" not fullfilled");
            }
        },2000);
    })
}
Promfunc().then(function(){
    console.log("It has been resolved");
}).catch(function(error){
    console.log("sorry"+error)
})