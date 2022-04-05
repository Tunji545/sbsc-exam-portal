// Sigin-Signup login Page
const signin_btn = document.querySelector("#sign-in-btn");
const signup_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signup_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
})
signin_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
})

// login validation
var attempt = 5; // Variable to count number of attempts.
function validate(){
    var id_num = document.querySelector('#id_num').value;
    var password = document.querySelector('#pass_word').value;
    if (id_num) {
        window.location = "student.html";
        
    }
    else{
        attempt --; //Decrement by one
        alert(`You have ${attempt} Attempt Left`);
        if(attempt === 0){
            document.querySelector("#id_num").disabled = true;
            document.querySelector("#pass_word").disabled = true;
            document.querySelector("#submit").disabled = true;
            return false
        }
    }
}

// Student Signup

// Admin Sign up
// Validation

