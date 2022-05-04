//server response
const Techdet = [
    {
        company: "Google",
        product: "Google Cloud (GCP)"
    },
    {
        company: "Full creative",
        product: "AnswerConnect"
    }
]
function register(details) {
    return new Promise(function(resolve,reject){
    setTimeout(function () {
        Techdet.push(details)
        console.log("Details updated succesfully")
        const error = false;
        if(!error){
            resolve();
        }
        else{
            reject()
        }
    }, 3000);

 })
}
function getdata() {
    setTimeout(function () {                                                                                                                                                                                                                                                                                              
        let str = "";
        Techdet.forEach(function(info) {                                                               
            str += `<li class="list-group-item "> ${info.company} - ${info.product}  </li>`
            console.log("Details fetched");
        });
        document.getElementById('uldiv').innerHTML = str;
    },1000 );
}
let newtech = {
    company: "microsoft",
    product: "Azure"
}
let newtech2 = {
    company: "adobe",
    product: "adobexd"
}
register(newtech).then(function(){
    getdata()
}).catch(function(){
    console.error("some error occured")
})
register(newtech2).then(function(){
    getdata()
}).catch(function(){
    console.error("some error occured")
})
