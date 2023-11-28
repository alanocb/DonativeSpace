/*https://github.com/WilliamDosSantos/Tela-Login.git*/

async function login() {
    let msgDOM = document.getElementById("msg");
    msgDOM.textContent = "";
    try {
        let name = document.getElementById("name").value;
        let pass = document.getElementById("password").value;
        let result = await requestLogin(name,pass);
        if (result.err) {
            msgDOM.textContent = "An error occurred";
        } else if (!result.successful) {
            msgDOM.textContent = "Wrong username or password";    
        } else {
            msgDOM.textContent = "Login successful!";    
            window.location.pathname = "/profile.html"
        }
    } catch (err) {
        console.log(err);
        msgDOM.textContent = "An error occurred";
    }
}

var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
    .addEventListener('click', () => {
        formSignin.style.left = "25px"
        formSignup.style.left = "450px"
        btnColor.style.left = "0px"
    })

document.querySelector('#btnSignup')
    .addEventListener('click', () => {
        formSignin.style.left = "-450px"
        formSignup.style.left = "25px"
        btnColor.style.left = "110px"
    })

    /*https://github.com/WilliamDosSantos/Tela-Login.git*/