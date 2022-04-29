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
    }, 3000);
}
function getdata() {
    setTimeout(function () {
        let str = "";
        Techdet.forEach(function(info) {
            // str += `<li> ${info.company} </li>`
            console.log(info)
        });
        document.getElementById('uldiv').innerHTML = str;
    }, );
}
let newtech = {
    company: "microsoft",
    product: "Azure"
}
register(newtech);
getdata();