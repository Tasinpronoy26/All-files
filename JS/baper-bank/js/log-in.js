//Step- 1 add event handler 

document.getElementById('btn-section').addEventListener('click', function () {

    //step- 2 (grab the email and declare the value)
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    //step- 3 (grab the password and declare the value)
    const passField = document.getElementById('pass-field');
    const pass = passField.value;

    //step- 4 (verify email & password)
    if(email === 'tasinpronoy56@gmail.com' && pass === 'lulli'){
        window.location.href = 'dashboard.html'
    }
    else{
        alert('LOL. Chor Sudanirfua');
    }
    
})