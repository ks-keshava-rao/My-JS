async function asynch(){
    console.log('inside the function');
    console.log('before fetching');
    const response = await fetch('https://api.github.com/users')
    console.log("before response")
    const users = await response.json();
    console.log("users resolved");
    return users;
}
// console.log("before calling");
// a = asynch()
// console.log("after calling");
// console.log(a);
// a.then(data => console.log(data));
// console.log("last line")

async function calling(){
a = await asynch()
console.log("after calling");
console.log(a);
a.then(data => console.log(data));
console.log("last line")
}

calling()

//user management tool 
//fetch and display 
//edit button during display 
//display the edited value 