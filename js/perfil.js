document.addEventListener('DOMContentLoaded', function() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const navButton = document.querySelector('.nav-button');
  
  if (loggedInUser) {
      navButton.innerHTML = `
          <div class="profile-menu">
              <img src="${loggedInUser.profilePicture}" alt="Profile Picture" class="profile-picture" onclick="toggleProfileMenu()">
              <div id="profileMenu" class="profile-menu-content">
                  <a href="./pages/perfil.html">Perfil</a>
                  <a href="#" onclick="logout()">Salir</a>
              </div>
          </div>
      `;
  }
});

function toggleProfileMenu() {
  document.getElementById('profileMenu').classList.toggle('show');
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = './index.html';
}
