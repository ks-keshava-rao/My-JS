// Promise.all - Takes an iterable and return a new promise 
// rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, 
// when we need all results successful to proceed:

// Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:
// {status:"fulfilled", value:result} for successful responses,
// {status:"rejected", reason:error} for errors.
//user information fetch

// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
//   ]).then(alert);
//applications - Benchmarking - faster and optimized operations for different approaches
// search for the fastest server 

// The first promise here was fastest, but it was rejected,
// so the second promise became the result. After the first fulfilled promise “wins the race”, all further results are ignored.

// Promise.resolve(value) creates a resolved promise with the result value.
// used for compatibility, when a function is expected to return a promise.


  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert);
  
  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert);

  //async await 
  // async function showDP(){
  //   let response = await fetch('/my.json').catch(function(){console.log("error")});
  //   let user = await response.json();
  //   console.log(user)
  //   // let githubResponse = await fetch(`https://api.github.com/users/${user.name}`)
  // }

