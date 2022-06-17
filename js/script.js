// let passwordOne = document.getElementById("password1");
// let passwordTwo = document.getElementById("password2");


// passwordOne.onkeyup = function() {

// if (passwordOne === passwordTwo) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
// }
// }

// passwordTwo.onkeyup = function() {

//     if (passwordOne === passwordTwo) {
//         letter.classList.remove("invalid");
//         letter.classList.add("valid");
//     }
//     }

function check(input) {
    let password = document.getElementById('password').value
    let password2 = document.getElementById('password')
    if (input.value != password) {
        password2.classList.add("invalid");
        password2.classList.remove("valid");
        input.setCustomValidity('* Passwords do not match');
      
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}