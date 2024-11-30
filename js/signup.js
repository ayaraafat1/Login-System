// !========================== Start Global Variables================
let signupName = document.getElementById("signupName"); // Input element for signupName
let signupEmail = document.getElementById("signupEmail"); // Input element for signupEmail
let signupPassword = document.getElementById("signupPassword"); // Input element for signupPassword
let note = document.querySelector(".my-note");//alert message
let signupbtn = document.getElementById("signup"); // Button to signup
let dataList = []; // Array to store the list of user's data

// Load user data from localStorage if available
if (localStorage.getItem("usercontainer") !== null) {
    dataList = JSON.parse(localStorage.getItem("usercontainer")); // Load data into the list
}
// !========================== End Global Variables================


//? ========================== Start Events================
signupbtn.addEventListener("click",function(){
    signup();
})
signupEmail.addEventListener("input",function(){
    checkUserEmailValid();
})
signupPassword.addEventListener("input",function(){
    checkUserPasswordValid();
})
signupName.addEventListener("input",function(){
    checkUserNameValid();
})
//? ========================== End Events================



// ?========================== Start Functions================

// Function to add a new user
function signup() {
    if(checkUserEmailValid()&&checkUserPasswordValid()&&checkUserNameValid()){
    let user = {
        name: signupName.value.trim(), // Trim the input value for signupName
        email: signupEmail.value.trim(), // Trim the input value for signupEmail
        password: signupPassword.value.trim(), // Trim the input value for signupPassword
    };

    if (checkEmailExist())
        {
            note.innerHTML ="The Email is already exist"
            note.classList.add("text-danger");
            signupEmail.classList.add("is-invalid");
        }
    else {
        dataList.push(user); // Add the new user
        localStorage.setItem("usercontainer", JSON.stringify(dataList));// Save the updated datalist to localStorage
        note.innerHTML ="Success"
        note.classList.add("text-success");
        note.classList.remove("text-danger");
        clearForm(); // Clear the form fields
    }
    }
    else if(checkInputsEmpty())
    {
        note.innerHTML ="All inputs is required"
        note.classList.add("text-danger");
    }
}

//Function to check on inputs
function checkInputsEmpty(){
    if(signupName.value === "" ||  signupEmail.value === ""  ||    signupPassword.value === ""){
        return true;
    }
}

//Function to check on email
function checkEmailExist(){
    for( let i=0 ; i<dataList.length ; i++){
        if(dataList[i].email ===  signupEmail.value ){
            return true;
        }
    }
}

// Function to clear the input form
function clearForm() {
    signupEmail.value = null;
    signupName.value = null;
    signupPassword.value = null;

    signupName.classList.remove("is-valid");
    signupEmail.classList.remove("is-valid");
    signupPassword.classList.remove("is-valid");
}

// Function to check valid value
function checkUserNameValid() {
    var regex = /^[a-zA-Z0-9_-]{3,10}$/;
    var text = signupName.value ;
    if(regex.test(text)){
      signupName.classList.add("is-valid");
      signupName.classList.remove("is-invalid");
      document.querySelector(".name-note").classList.add("d-none")
      return true;
    }
    else{
      signupName.classList.add("is-invalid");
      signupName.classList.remove("is-valid");
      document.querySelector(".name-note").classList.remove("d-none")
      return false;
    }
}
function checkUserEmailValid() {
    var regex = /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var text = signupEmail.value ;
    if(regex.test(text)){
      signupEmail.classList.add("is-valid");
      signupEmail.classList.remove("is-invalid");
      document.querySelector(".email-note").classList.add("d-none")
      return true;
    }
    else{
      signupEmail.classList.add("is-invalid");
      signupEmail.classList.remove("is-valid");
      document.querySelector(".email-note").classList.remove("d-none")
      return false;
    }
}
function checkUserPasswordValid() {
    var regex = /^[A-Za-z\d]{5,}$/;
    var text = signupPassword.value ;
    if(regex.test(text)){
      signupPassword.classList.add("is-valid");
      signupPassword.classList.remove("is-invalid");
      document.querySelector(".passward-note").classList.add("d-none")
      return true;
    }
    else{
      signupPassword.classList.add("is-invalid");
      signupPassword.classList.remove("is-valid");
      document.querySelector(".passward-note").classList.remove("d-none")
      return false;
    }
}
// ?========================== End Functions================
