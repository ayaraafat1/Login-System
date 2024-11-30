// !========================== Start Global Variables================
let loginEmail = document.getElementById("loginEmail"); // Input element for loginEmail
let loginPassword = document.getElementById("loginPassword"); // Input element for loginPassword
let note = document.querySelector(".my-note");//alert message
let loginbtn = document.getElementById("login"); // Button to login
let dataList = []; // Array to store the list of user's data
// Load user data from localStorage if available
if (localStorage.getItem("usercontainer") !== null) {
    dataList = JSON.parse(localStorage.getItem("usercontainer")); // Load data into the list
}
// !========================== End Global Variables================



//? ========================== Start Events================
loginbtn.addEventListener("click",function(){
    login()
})
//? ========================== End Events================



// ?========================== Start Functions================

// Function to login
function login() {

    if (checkUserExist())
        {
            window.location.href = 'home.html'
        }
    else if(checkInputsEmpty())
    {
        note.innerHTML ="All inputs is required"
        note.classList.add("text-danger");
    }
    else
    {
        note.innerHTML ="incorrect email or password"
        note.classList.add("text-danger");
    }
    
}

//Function to check on inputs
function checkInputsEmpty(){
    if( loginEmail.value === ""  ||    loginPassword.value === ""){
        return true;
    }
}

//Function to check on data
function checkUserExist(){
    for( let i=0 ; i<dataList.length ; i++){
        if(dataList[i].email ===  loginEmail.value && dataList[i].password ===  loginPassword.value ){
            localStorage.setItem('userName',dataList[i].name)
            return true;

        }
    }

}

// ?========================== End Functions================
