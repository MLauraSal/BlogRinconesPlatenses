const btnLogin = document.querySelectorById("#loginBtn");
const btnRegister = document.querySelectorById("#registerBtn");
const register = document.querySelectorById("#register");
const login = document.querySelectorById("#login");



function login() {
    login.style.left = "4px";
    register.style.right = "-520px";
    btnLogin.className += " white-btn";
    btnRegister.className = "btn";
    login.style.opacity = 1;
    register.style.opacity = 0;
}
function register() {
    login.style.left = "-510px";
    register.style.right = "5px";
    btnLogin.className = "btn";
    btnRegister.className += " white-btn";
    login.style.opacity = 0;
    register.style.opacity = 1;
}
