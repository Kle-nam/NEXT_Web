
const navbarToggle = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
   
