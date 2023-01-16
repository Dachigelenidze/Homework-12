let formValidation = document.getElementById('form')
let myInput = document.getElementById("psw");
let userName = document.getElementById('username');
let errorText = document.getElementById('errortext')
let errorPassword = document.getElementById('errorpassword')
let strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
let regularExpression= "^[A-Za-z][A-Za-z0-9_]{7,29}$";



    userName.addEventListener('keydown', function(){
        if(userName.value.match(regularExpression)) {  
            errorText.innerText = 'Username is Valid'
            errorText.style.color = 'green' ;
          } else {
            errorText.innerText = 'Please insert another Username'
            errorText.style.color = 'red' ;
          }
    
    })
    
    myInput.addEventListener('keyup', function(){
        if(myInput.value.match(strongRegex)) {  
            errorPassword.innerText = 'Password is Strong'
            errorPassword.style.color = 'green' ;
          } else {
            errorPassword.innerText = 'Week Password, Please insert stronger one'
            errorPassword.style.color = 'red' ;
          }
        })



 
  