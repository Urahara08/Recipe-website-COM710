const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    //  e.preventDefault();

    let errors = []

    if(firstname_input){
        // 
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        // if we dont have a firstname input then we are in the login
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length > 0){
        // if errors
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(firstname, email, password, repeat_password){
    let errors = []
    
    if(firstname === '' || firstname === null){
        errors.push('First name is required')
        firstname_input.parentElement.classList.add('Incorrect')
    }

    if(email === '' || email === null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('Incorrect')
    }

    if(password === '' || password === null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('Incorrect')
    }

    if(repeat_password === '' || repeat_password === null){
        errors.push('Repeat password is required')
        repeat_passowrd_input.parentElement.classList.add('Incorrect')
    }

    return errors
}