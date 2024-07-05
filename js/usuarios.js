const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const user = document.querySelector("[data-user]").value;
    const name = document.querySelector("[data-name]").value;
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;
    
   addUser(user, name, email, password);
})







