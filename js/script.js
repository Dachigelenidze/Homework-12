let formValidation = document.getElementById("reg-form");

formValidation.addEventListener("submit", function (element) {
  element.preventDefault();

  let errors = {};
  let form = element.target;

  
  let usernameField = document.getElementById("firstname").value;
  

  if (usernameField.length < 5) {
    errors.username = "Username must contain 8 symbols";
  }

  if (usernameField == "") {
    errors.username = "Username can not be empty";
  }

  
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  if (password1 == "") {
    errors.mypassword = "Password field can not be empty";
  }
  if (password1 != password2) {
    errors.mypassword2 = "Passwords don't match";
  }

 
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    
    errors.agree = "You must agree our terms and conditions";
  }


  let age = false;
  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "Please select your age";
  }
  else

  form.querySelectorAll('.error-text').forEach(  (item) => {
    item.textContent = " ";

})

  for( let element in errors){


    let pError = document.getElementById('error-' + element)

    if(pError) {
        pError.textContent = errors[element]
    }
    if(Object.keys(errors).length == 0){
        form.submit();
    }

  }
});

let toggleIcon = document.getElementById('toggleicon');

toggleIcon.addEventListener('click', function(){
    if( password1.type == 'password')
{
    password1.setAttribute('type','text');
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash')
}
   

    else{
        password1.setAttribute('type','password');
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye')
        
        

    }

})







