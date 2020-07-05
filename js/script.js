const formLogIn = document.getElementById("log-in");
let formSignIn = document.getElementById("sign-in");
let name = document.getElementById("name");
let passwordLogIn = document.getElementById("password");
let email = document.getElementById("email");
let userName = document.getElementById("user_name");
let passwordSignIn = document.getElementById("password2");


formLogIn.addEventListener('submit', (e) => {


    if (checkInputsLogIn()) {
        console.log('Success')
    } else {
        console.log('Error');
        e.preventDefault();
    }

});

function checkInputsLogIn() {
    let isValid = true;

    const nameValue = name.value.trim();
    const passwordLogInValue = passwordLogIn.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
        isValid = false;
    } else if (nameValue.length < 3) {
        setErrorFor(name, 'Min value name 3 symbols');
        isValid = false;
    } else {
        setSuccessFor(name);
    }

    if (passwordLogInValue === '') {
        setErrorFor(passwordLogIn, 'Password cannot be blank');
        isValid = false;
    } else if (passwordLogInValue.length < 6 || passwordLogInValue.length > 32) {
        setErrorFor(passwordLogIn, 'Enter a value between 6-32');
        isValid = false;
    } else {
        setSuccessFor(passwordLogIn);
    }
    return isValid;
}

formSignIn.addEventListener('submit', (e) => {


    if (checkInputsSignIn()) {
        console.log('Success')
    } else {
        console.log('Error');
        e.preventDefault();
    }
});

function checkInputsSignIn() {
    let isValid = true;
    const emailValue = email.value.trim();
    const userNameValue = userName.value.trim();
    const passwordSignInValue = passwordSignIn.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        isValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
        isValid = false;
    } else {
        setSuccessFor(email);
    }


    if (userNameValue === '') {
        setErrorFor(userName, 'User name cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(userName);
    }

    if (passwordSignInValue === '') {
        setErrorFor(passwordSignIn, 'Password cannot be blank');
        isValid = false;
    } else if (passwordSignInValue.length < 6 || passwordSignInValue.length > 32) {
        setErrorFor(passwordSignIn, 'Enter a value between 6-32');
        isValid = false;
    } else {
        setSuccessFor(passwordSignIn);
    }
    return isValid;
}


function setErrorFor(input, message) {
    input.className = 'error';
    let formControl = input.parentElement;
    let errorRow = formControl.querySelector('small');
    errorRow.style.visibility = "visible"
    errorRow.innerText = message;
}

function setSuccessFor(input) {
    input.className = 'success';
    let formControl = input.parentElement;
    let errorRow = formControl.querySelector('small');
    errorRow.style.visibility = "hidden"

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

