// async function myFetch() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let users = await response.json();

  
    
//   }
  
//   myFetch();
const url = "https://jsonplaceholder.typicode.com/users/1";
// fetch(url)
// .then(res=>res.json())
// .then(user=>{
//     console.log(user);
//     window.open(`http://${user.website}`);
// })

// (function())(); that the way can we call the function

(async function(){
    const res= await fetch(url);
    const user= await res.json();
    console.log(user);
    window.open('http://'+ user.website);
})();

// when the console.log has the await then print after
