document.addEventListener("DOMContentLoaded", function() {
    // Simulando el estado de autenticación del usuario
    const isLoggedIn = true; // Cambia esto según tu lógica de autenticación
    const userPhotoUrl = '../images/avatar/avatar1.jpg'; // URL de la foto del usuario
  
    const navButton = document.getElementById("navButton");
  
    if (isLoggedIn) {
      navButton.innerHTML = `<img src="${userPhotoUrl}" alt="User Photo" class="user-photo">`;
    }
  });
  