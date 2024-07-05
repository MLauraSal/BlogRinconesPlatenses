const btnLogin = document.querySelectorById("#loginBtn");
const btnRegister = document.querySelectorById("#registerBtn");
const register = document.querySelectorById("#register");
const login = document.querySelectorById("#login");





/*
 * FUNCTION LOGIN
*/
const loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    

}

/* FUNCTION NAVBAR
*/
const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    
}


window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    
}