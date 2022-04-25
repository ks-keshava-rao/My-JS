document.querySelector('#category').addEventListener('click',(e)=>{
    // console.log("category paent clicked");
    console.log(e.target.id);
    if(e.target.tagName == "Li"){
    window.location.href = "/" + e.target.id;
    }
})