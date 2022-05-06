async function get(){
    const localjson = await fetch('./my.json');
    const localdata = await localjson.json();

    return localdata;
}
get().then(function(datar){
    console.log(datar);
    datar.forEach(element => {
        console.log(element.id)
    });
}).catch(function(error){
    console.error(error);
})