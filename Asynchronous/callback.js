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
    setTimeout(function () {
        Techdet.push(details)
        alert("Details updated succesfully")
    }, 3000);
}
function getdata() {
    setTimeout(function () {                                                                                                                                                                                                                                                                                              
        let str = "";
        Techdet.forEach(function(info) {                                                               
            str += `<li class="list-group-item "> ${info.company} - ${info.product}  </li>`
            alert("Details fetched")
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
register(newtech);
register(newtech2);
getdata();