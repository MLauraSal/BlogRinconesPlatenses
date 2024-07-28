const form = document.querySelector("#formulario");
const users = [];


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const user = document.querySelector("#ususario").value;
    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#correo").value;
    const password = document.querySelector("#password").value;
    if
    
   addUser(user, name, email, password);
})







