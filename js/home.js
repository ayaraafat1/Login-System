// !=============== Global Variables===========
let userName = document.getElementById("userName"); 
let logOutbtn = document.querySelector(".my-btn");


//? Load username from localStorage if available & add it in h1
if (localStorage.getItem("userName") !== null) {
    userName.innerHTML=`Welcom
    ${localStorage.getItem('userName')}`
}

//? =========logout event=======
logOutbtn.addEventListener("click",function()
{
    logOut()
})

//? function to logOut & remove username key from localstorage
function logOut()
{
    window.location.href='index.html';
    localStorage.removeItem('userName');
}




