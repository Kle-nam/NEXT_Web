//const menu = document.querySelector('#mobile-menu')
//const menu.links = document.querySelector('.navbar__menu')

//menu.addEventListener('click', function(){
   // menu.classList.toggle('is-active');
   // menuLinks.classList.toggle('active');
//});

const navbarToggle = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
   
