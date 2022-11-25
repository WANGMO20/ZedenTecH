const usernameE1 = document.querySelector('#username');
const emailE1 = document.querySelector('#email');
const phoneE1= document.querySelector('#phone');
const form = document.querySelector('#signup');

form.addEventListener('submit', function(e){
    e.preventDefault();

    //validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPhonevalidValid = checkPhone();
     let isFormValid = isUsernameValid && isEmailValid && isPhonevalidValid;

   
})


const isRequired = value => value ===""?false:true;
const isBetween =(length,min,max)=>length<min|| length>max ? false : true;

const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;

        const username = usernameE1.value.trim();
        if(!isRequired(username)){
            showError(usernameE1, 'Please enter your fullname.')
        }
        else if(!isBetween(username.length, min, max)){
            showError(usernameE1, `Username must be between ${min} and ${max} characters.`)
        }
        else{
            showSuccess(usernameE1);
            valid = true;
        }
        return valid;
};


const isEmailValid = (email)=>
{
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
};

const checkEmail = () => {
    let valid = false;

        const email = emailE1.value.trim();
        if(!isRequired(email)){
            showError(emailE1, 'Please enter your email.')
        }
        else if(!isEmailValid(email)){
            showError(emailE1, `Email is not valid`)
        }
        else{
            showSuccess(emailE1);
            valid = true;
        }
        return valid;
};


const checkPhone = () => {
    let valid = false;
    
        const phone = phoneE1.value.trim();
        if(!isRequired(phone)){
            showError(phoneE1, 'Please enter your contact number.')}
        else{
            showSuccess(phoneE1);
            valid = true;
        }
        return valid;
};


const showError = (input, message)=>{
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message; 
}

const showSuccess = (input)=>{
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small')
    error.textContent="";
}

